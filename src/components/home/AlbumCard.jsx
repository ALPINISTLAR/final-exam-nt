import React from 'react';
import '../styles.css';

const AlbumCard = ({ src, title }) => {
  return (
    <div className='album-card'>
      <img src={src}/>
      <h3>{title}</h3>
    </div>
  );
};

export default AlbumCard;
