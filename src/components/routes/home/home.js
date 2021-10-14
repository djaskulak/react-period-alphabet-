import './home.css'

import { NavLink, Switch, Route } from 'react-router-dom';

import Cards from '../alphabet/cards';

function Home () {
    return (
        <Switch>
            <div className="Banner">
                <div className="text">
                    <h2>Welcome to Period Alphabet!</h2>
                    <p>Your survival guide for navigating your menstrual cycle. Connect with others, find resources near you, and discover tips that we wish we knew when growing up!</p>
                    <NavLink to='/alphabet'><button type="submit">Get Started</button></NavLink>
                </div>

                <div className="image">
                    <img src="images/header.svg" alt="girl flexing"/>
                </div>
            </div>
            <Route exact path='/alphabet' component={Cards}></Route>
        </Switch>
    )
}

export default Home