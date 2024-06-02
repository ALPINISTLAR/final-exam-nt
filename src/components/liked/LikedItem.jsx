import React from 'react';

const formatDuration = (durationMs) => {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = ((durationMs % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const LikedItem = ({ order, img, title, artist, album, duration }) => {
  return (
    <div className="liked-item">
      <div className="liked-item_order">{order}</div>
      <div className="liked-item_img">
        <img src={img} alt={title} />
      </div>
      <div className="liked-title-artist">
      <div className="liked-item_title">{title}</div>
      <div className="liked-item_artist">{artist}</div>
      </div>
      <div className="liked-item_album">{album}</div>
      <button className='liked-item_like'><img src="like-filled.svg"/></button>
      <div className="liked-item_duration">{formatDuration(duration)}</div>
    </div>
  );
};

export default LikedItem;
