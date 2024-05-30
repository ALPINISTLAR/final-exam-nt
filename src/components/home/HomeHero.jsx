import React from 'react'
import AlbumCard from './AlbumCard'

const HomeHero = () => {
  return (
    <div className='home-hero'>
  <div className="top">
    <button><img src="arrow.svg"/></button>
    <button><img src="arrow.svg"/></button>
  </div>

  <h1 className='home-title'>Good afternoon</h1>

  <div className="album-wrapper">
  <AlbumCard src="/path/to/image1.jpg" title="Album 1"/>
  <AlbumCard src="/path/to/image1.jpg" title="Album 1"/>
  <AlbumCard src="/path/to/image1.jpg" title="Album 1"/>
  <AlbumCard src="/path/to/image1.jpg" title="Album 1"/>
  <AlbumCard src="/path/to/image1.jpg" title="Album 1"/>
  <AlbumCard src="/path/to/image1.jpg" title="Album 1"/>
  </div>
    </div>
  )
}

export default HomeHero