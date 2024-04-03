// import './navbar.css';
import img1 from './comp-logo.png'
const Navbar = () => {
    return (
        <div className="navbar">
            <a href = ".home"><img className="intro-img1" src={img1} alt='' /></a>
            <ul>
                <li><a href=".home">Home</a></li>
                <li><a href=".our_collection">Our Collection</a></li>
                <li><a href=".review">Review</a></li>
                <li><a href=".contact_form">Contact Form</a></li>
            </ul>
            
        </div>
    );
}
 
export default Navbar;