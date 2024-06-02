import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import './home/home.css';
import 'react-h5-audio-player/lib/styles.css';


const MusicPlayer = ({ src }) => {
  return (
    <div className="player">
      <AudioPlayer
        autoPlay
        src={src}
        showSkipControls={true}
        showJumpControls={true}
      />
    </div>
  );
};

export default MusicPlayer;
