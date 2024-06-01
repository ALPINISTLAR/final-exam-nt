import React from 'react';
import '../styles.css';

const AlbumCard = ({ data }) => {
  if (!data || !data.images || data.images.length === 0) {
    return <div>No album data available</div>;
  }

  return (
    <div className='album-card'>
      <img src={data.images[0].url} alt={data.name}/>
      <h3>{data.name}</h3>
    </div>
  );
};

export default AlbumCard;
