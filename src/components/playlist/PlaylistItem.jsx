import React from 'react';

const formatDuration = (durationMs) => {
  const minutes = Math.floor(durationMs / 60000);
  const seconds = ((durationMs % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const PlaylistItem = ({ order, img, title, artist, album, duration }) => {
  return (
    <div className="playlist-item">
      <div className="playlist-item_order">{order}</div>
      <div className="playlist-item_img">
        <img src={img} alt={title} />
      </div>
      <div className="playlist-title-artist">
      <div className="playlist-item_title">{title}</div>
      <div className="playlist-item_artist">{artist}</div>
      </div>
      <div className="playlist-item_album">{album}</div>
      <button className='playlist-item_like'><img src="like.svg"/></button>
      <div className="playlist-item_duration">{formatDuration(duration)}</div>
    </div>
  );
};

export default PlaylistItem;
