import React from 'react';
import './App.css';
import Navbar from './Navbar.js';
import img from './back-img.png';
import data from './bookCards.json';
import './collections.css';

function App() {
  return (
    <div className="App">
      <div className="image-container">
        <img className="intro-img" src={img} alt='' />
        <Navbar />
      </div>
      <div className="intro-text-overlay">
        <p id = "home" className='home'>Welcome to LitNook</p>
        <p className='intro-text'>Make your life feeling happy</p>
      </div>
      <p id = "our_collection" className='our_collection'>Our Collections</p>
      <div className='collection-scroll-bar'>
        {data.map((book, index) => (
          <div className='book-card' id={`card-${index}`} key={index}>
            <img className="picture" src={require(`${book.image}`).default} alt={book.title} />
            <h3>{book.title}</h3>
            <div className='card-footer'><span className='price'>Price: {book.price}</span><span className='rating'>Rating: {book.rating}</span></div>
          </div>
        ))}
      </div>
      <h1>Hello</h1>
    </div>
  );
}

export default App;
