import React from 'react'
import '../App.css'
import PlaylistHero from '../components/playlist/PlaylistHero'
import PlaylistMain from '../components/playlist/PlaylistMain'

const Playlist = () => {
  return (
    <div className='pages'>
      <PlaylistHero />
      <PlaylistMain />
    </div>
  )
}

export default Playlist