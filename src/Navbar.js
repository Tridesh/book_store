import React from 'react';
import img1 from './comp-logo.png';

const Navbar = () => {
    const handleClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar">
            <a href="#home"><img className="intro-img1" src={img1} alt='' /></a>
            <ul>
                <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a></li>
                <li><a href="#our_collection" onClick={(e) => handleClick(e, 'our_collection')}>Our Collection</a></li>
                <li><a href="#review" onClick={(e) => handleClick(e, 'review')}>Review</a></li>
                <li><a href="#contact_form" onClick={(e) => handleClick(e, 'contact_form')}>Contact Form</a></li>
            </ul>
        </div>
    );
}

export default Navbar;
