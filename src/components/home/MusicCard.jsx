import React from 'react'

const MusicCard = ({ img, title, info }) => {
  return (
    <div className='music-card'>
      <img src={img} alt={title} />
      <div className="card-info">
      <h3>{title}</h3>
      <p>{info}</p>
      </div>
    </div>
  )
}

export default MusicCard
