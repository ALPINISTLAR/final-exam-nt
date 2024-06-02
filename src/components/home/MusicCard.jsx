import React from 'react';
import { useNavigate } from 'react-router-dom';

const MusicCard = ({ img, title, info }) => { // "id" propini qabul qilish
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/playlist`); // id ni foydalanish
  };

  return (
    <div className='music-card' onClick={handleClick}>
      <img src={img} alt={title} />
      <div className="card-info">
        <h3>{title}</h3>
        <p>{info}</p>
      </div>
    </div>
  );
};

export default MusicCard;
