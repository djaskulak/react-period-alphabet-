import './intro.css'

function Intro () {
    return (
        <div className="Banner">
            <div className="text">
                <h2>Welcome to Period Alphabet!</h2>
                <p>Your survival guide for navigating your menstrual cycle. Connect with others, find resources near you, and discover tips that we wish we knew when growing up!</p>
                <button type="submit">Get Started</button>
            </div>

            <div className="image">
                <img src="images/header.svg" alt="girl flexing"/>
            </div>
        </div>
    )
}

export default Intro