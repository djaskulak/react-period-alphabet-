import './App.css';
import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar'
import Intro from './components/intro';
import Cards from './components/cards'
import MapArea from './components/mapArea'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWthaGVybWluaXNlIiwiYSI6ImNrdWV3NG5mczFvaWwyd3FsZWQydmptbTMifQ.xJHX6_AVFGSJOIE4kMs02A';

function App() {

  return (
    <div className="App">
      <Navigation />
      <Main />
      <NavBar />
      <Intro />
      <Cards />
      <MapArea />
    </div>
  );
}

const Navigation = () => (
  <nav>
    <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);

const Main = () => (
  <Switch>
    {/* <Route path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route> */}
  </Switch>
);

export default App;
