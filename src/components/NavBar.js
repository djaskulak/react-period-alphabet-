import './navbar.css'

function NavBar () {
    return (
        <div className="NavBar">
            <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
            <ul>
                <li>Home</li>
                <li>News</li>
                <li>Alphabet</li>
                <li>Support</li>
            </ul>
        </div>
    );
}

export default NavBar