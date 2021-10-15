import alphabet from './data.json'
import './cards.css'

import { NavLink, Switch, Route } from 'react-router-dom';

function Cards () {
    return (
        <Switch>
            <div className="Cards">
                <div className="banner">
                    <h1>ALPHABET</h1>
                </div>
                <ul className="alphabet">
                    {alphabet.map(l => 
                        <NavLink to={`/${l.letter}`}>
                            <li className="card">
                                <img src={process.env.PUBLIC_URL + '/images/' + l.image} alt="card"/>
                                <div className="word">
                                    <h3>{l.title}</h3>
                                </div>
                            </li>
                        </NavLink>
                    )}
                </ul>
            </div>
            {/* {alphabet.map(l => 
                <Route exact path={`/${l.letter}`} component={eval(l.letter)}/>
            )} */}
        </Switch>
    );
}

export default Cards