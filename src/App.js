import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import img from './back-img.png';


function App() {
  return (
    <div className="App">
      
      <div className="image-container">
        <img className="intro-img" src={img} alt='' />
        <Navbar />
      </div>
      <div className="intro-text-overlay">
        <p className='home'>Welcome to LitNook</p>
        <p className='intro-text'>Make your life feeling happy</p>
      </div>
      <p className='our_collection'>Our Collections</p>
      <p className='ex'>HEllo</p>
    </div>
  );
}

export default App;
