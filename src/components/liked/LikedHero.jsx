import React from 'react'
import './liked.css'

const LikedHero = () => {
  return (
    <div className='liked-hero'>
<div className="top">
<button><img src="arrow.svg"/></button>
<button><img src="arrow.svg"/></button>
</div>


<div className="artist">
  <img src="heart.svg"/>

  <div className="artist-info">
    <h2>Liked Songs</h2>
  </div>
</div>

<div className="controls-wrapper">
  <div className="controls">
    <button><img src="play.svg"/></button>
    <button><img src="like.svg"/></button>
    <button><img src="down.svg"/></button>
    <button><img src="option.svg"/></button>
  </div>
</div>
    </div>
  )
}

export default LikedHero