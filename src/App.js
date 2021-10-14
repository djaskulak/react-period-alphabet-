import './App.css';
import React from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';

// import Home from './components/routes/home';
// import Cards from './components/cards/cards';
// import MapArea from './components/routes/mapArea/mapArea';

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
          <li><NavLink to='/cards'>Alphabet</NavLink></li>
          <li><NavLink to='/map'>Map</NavLink></li>
      </ul>
  </div>
);

const Home = () => (
  <div className='home'>
    <h1>Welcome to my portfolio website</h1>
    <p> Feel free to browse around and learn more about me.</p>
  </div>
)

const Cards = () => (
  <div className='about'>
    <h1>Cards</h1>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
    <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
  </div>
)

const MapArea = () => (
  <div className='map'>
    <h1>Map Area</h1>
  </div>
);


const Main = () => (
  <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/cards' component={Cards}></Route>
      <Route exact path='/map' component={MapArea}></Route>
  </Switch>
);

export default App;
