import './App.css';
import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

import Home from './components/home/home';
import Cards from './components/alphabet/cards';
import Map from './components/map/map';

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWthaGVybWluaXNlIiwiYSI6ImNrdWV3NG5mczFvaWwyd3FsZWQydmptbTMifQ.xJHX6_AVFGSJOIE4kMs02A';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Main />
    </div>
  );
}

const Navigation = () => (
  <div className="NavBar">
      <img src={process.env.PUBLIC_URL + '/images/logo.png'} alt="logo"/>
      <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/alphabet'>Alphabet</NavLink></li>
          <li><NavLink to='/map'>Map</NavLink></li>
      </ul>
  </div>
);

const Main = () => (
  <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/alphabet' component={Cards}></Route>
      <Route exact path='/map' component={Map}></Route>
  </Switch>
);

export default App;
