import React from 'react';
import MusicCard from './MusicCard';

const MusicCardWrapper = ({ title, playlists }) => {
  return (
    <div className='music-card__wrapper'>
      <div>
        <h2>{title}</h2>
        <button>see all</button>
      </div>

      <div className="card-music-wrapper">
        {playlists.map(playlist => (
          <MusicCard
            key={playlist.id}
            img={playlist.images[0].url}
            title={playlist.name}
            info={playlist.description}
          />
        ))}
      </div>
    </div>
  )
}

export default MusicCardWrapper;
