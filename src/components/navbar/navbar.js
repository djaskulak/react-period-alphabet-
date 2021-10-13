import './navbar.css'
import { NavLink } from 'react-router-dom';

function NavBar () {
    return (
        <div className="NavBar">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/alphabet'>Alphabet</NavLink></li>
                <li><NavLink to='/map'>Map</NavLink></li>
            </ul>
        </div>
    );
}

export default NavBar