import './App.css';
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar'
import Intro from './components/intro/intro';
import Cards from './components/cards/cards'
import MapArea from './components/map/mapArea'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWthaGVybWluaXNlIiwiYSI6ImNrdWV3NG5mczFvaWwyd3FsZWQydmptbTMifQ.xJHX6_AVFGSJOIE4kMs02A';

function App() {

  return (
    <div className="App">
      <Main />
      <NavBar />
      <Intro />
      <Cards />
      <MapArea />
    </div>
  );
}

const Main = () => (
  <Switch>
    {/* <Route path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
    <Route path='/contact' component={Contact}></Route> */}
  </Switch>
);

export default App;
