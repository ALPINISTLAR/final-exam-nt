import React from 'react';
import './layouts.css';

const LeftSideBar = () => {
  return (
    <div className='left-side'>
      <ul className='left-side__top'>
        <li><img src="home.svg" alt="home icon" /><a href="/">Home</a></li>
        <li><img src="search.svg" alt="search icon" /><a href="#">Search</a></li>
        <li><img src="library.svg" alt="library icon" /><a href="#">Your library</a></li>
        <li><img src="create.svg" alt="create playlist" /><a href="#">Create playlist</a></li>
        <li><img src="liked-songs.svg" alt="liked songs" /><a href="/liked">Liked songs</a></li>
      </ul>

      <ul className='recently'>
        <li><a href="#">Chill Mix</a></li>
        <li><a href="#">Insta Hits</a></li>
        <li><a href="#">Your Top Songs 2021</a></li>
        <li><a href="#">Mellow Songs</a></li>
        <li><a href="#">Anime Lofi & Chillhop Music</a></li>
        <li><a href="#">BG Afro “Select” Vibes</a></li>
        <li><a href="#">Afro “Select” Vibes</a></li>
        <li><a href="#">Happy Hits!</a></li>
        <li><a href="#">Deep Focus</a></li>
        <li><a href="#">Instrumental Study</a></li>
        <li><a href="#">OST Compilations</a></li>
        <li><a href="#">Nostalgia for old souled mill...</a></li>
        <li><a href="#">Mixed Feelings</a></li>
      </ul>
    </div>
  );
}

export default LeftSideBar;
