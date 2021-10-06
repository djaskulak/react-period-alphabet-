import './App.css';
import NavBar from './components/navbar'
import Cards from './components/cards'
import MapArea from './components/mapArea'

import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1IjoiZGFuaWthaGVybWluaXNlIiwiYSI6ImNrdWV3NG5mczFvaWwyd3FsZWQydmptbTMifQ.xJHX6_AVFGSJOIE4kMs02A';

function App() {

  return (
    <div className="App">
      <NavBar />

      <MapArea />
    </div>
  );
}

export default App;
