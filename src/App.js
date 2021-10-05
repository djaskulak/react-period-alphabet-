import './App.css';
//import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NavBar from './components/navbar'
import Cards from './components/cards'


function App() {
  return (
    <div className="App">
      <NavBar />
      <Cards />
    </div>
  );
}

export default App;
