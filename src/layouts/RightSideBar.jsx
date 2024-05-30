import React from 'react'
import './layouts.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RightSideBar = () => {
  return (
    <div className='right-side'>
    <div className="top">
    <p>friend activity</p>

    <div className="btn-wrapper">
    <button><img src="user.svg"/></button>
    <button><img src="close.svg"/></button>
    </div>
    </div>

    <p>Let friends and followers on Spotify see what you’re listening to.</p>

<p>Go to Settings Social and enable “Share my listening activity on Spotify.’ You can turn this off at any time.</p>

<button className="btn-setting">SETTINGS</button>
    </div>
    )
  }

  export default RightSideBar