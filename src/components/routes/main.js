import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import Cards from '../cards/cards'
import MapArea from './mapArea/mapArea';

function Main () {
    return (
        <Switch>
            <Route path='/' component={Home}></Route>
            <Route path='/cards' component={Cards}></Route>
            <Route path='/map' component={MapArea}></Route>
        </Switch>
    )
}

export default Main