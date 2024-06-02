import React, { useEffect, useState } from 'react';
import LikedItem from './LikedItem';
import { useSelector } from 'react-redux';

const LikedMain = () => {
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchData = async () => {
      try {

        const response = await fetch('https://api.spotify.com/v1/playlists/37i9dQZF1DXa8NOEUWPn9W', {
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
  }, [token]); // token o'zgarishi bo'lganda useEffect chaqiriladi

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='liked-main'>
      <div className="liked-main_header">
        <div><span>#</span> title</div>
        <div>album</div>
        <div><img src="clock.svg" alt="clock" /></div>
      </div>

      {tracks.map((item, index) => (
        <LikedItem
          key={item.track.id}
          order={index + 1}
          img={item.track.album.images[0]?.url || ''}
          title={item.track.name}
          artist={item.track.artists.map(artist => artist.name).join(', ')}
          album={item.track.album.name}
          duration={item.track.duration_ms}
        />
      ))}
    </div>
  );
};

export default LikedMain;
