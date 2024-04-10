import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import img from './back-img.png';
import data from './bookCards.json';

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
      <div className='collection-scroll-bar'>
        {data.map((book, index) => (
          <div className='book-card' id={`card-${index}`} key={index}>
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
