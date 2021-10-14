import './navbar.css'
import { Link } from 'react-router-dom';

function NavBar () {
    return (
        <div className="NavBar">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/cards'><li>Alphabet</li></Link>
                <Link to='/map'><li>Map</li></Link>
            </ul>
        </div>
    );
}

export default NavBar