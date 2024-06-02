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
        {playlists.map(item => (
          <MusicCard
            key={item.id}
            id={item.id} // "id" ni uzatish
            img={item.images[0].url}
            title={item.name}
            info={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default MusicCardWrapper;
