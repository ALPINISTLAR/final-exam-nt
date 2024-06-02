import React, { useEffect, useState } from 'react';
import PlaylistItem from './PlaylistItem';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // useParams import qilindi
import MusicPlayer from '../MusicPlayer'; // MusicPlayer import qilindi

const PlaylistMain = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null); // hozirgi trekkni saqlash
  const token = useSelector((state) => state.auth.token);
  const { id } = useParams(); // id ni olish

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch(`https://api.spotify.com/v1/playlists/37i9dQZF1DXa8NOEUWPn9W`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API response:', data);

        if (data && data.tracks && data.tracks.items) {
          setTracks(data.tracks.items);
        } else {
          console.error('Unexpected data structure:', data);
          throw new Error('Unexpected data structure');
        }

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, [token, id]); // id ni effect dependency listasiga qo'shing

  // Trackni ijro etish uchun funksiya
  const playTrack = (trackId) => {
    const track = tracks.find(item => item.track.id === trackId); // trackni topish
    if (track) {
      setCurrentTrack(track.track); // hozirgi trekkni sozlash
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='playlist-main'>
      <div className="playlist-main_header">
        <div><span>#</span> title</div>
        <div>album</div>
        <div><img src="clock.svg" alt="clock" /></div>
      </div>

      {tracks.map((item, index) => (
        <PlaylistItem
          key={item.track.id}
          id={item.track.id} // "id" ni uzatish
          order={index + 1}
          img={item.track.album.images[0]?.url || ''}
          title={item.track.name}
          artist={item.track.artists.map(artist => artist.name).join(', ')}
          album={item.track.album.name}
          duration={item.track.duration_ms}
          onClick={() => playTrack(item.track.id)} // click hodisasi qo'shildi
        />
      ))}

      {/* Agar hozirgi trekk bo'lsa, uni ijro etish uchun MusicPlayer komponentiga o'tkaziladi */}
      {currentTrack && <MusicPlayer src={currentTrack.preview_url} />}
    </div>
  );
};

export default PlaylistMain;
