import React from 'react'
import './playlist.css'

const PlaylistHero = () => {
  return (
    <div className='playlist-hero'>
<div className="top">
<button><img src="arrow.svg"/></button>
<button><img src="arrow.svg"/></button>
</div>


<div className="artist">
  <img src="https://i.scdn.co/image/ab67706f00000002c080e81e23e58ea8152bb1df"/>

  <div className="artist-info">
    <h2>Chill Mix</h2>
    <p>Julia Wolf, ayokay, Khalid and more</p>
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

export default PlaylistHero