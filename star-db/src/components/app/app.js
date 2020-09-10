import React from 'react';
import Header from '../header'
import './app.css';
import RandomPlanet from '../random-planet/random-planet';

function App() {
  return (
    <div className="App">
      <Header />
      <RandomPlanet />
    </div>
  );
}

export default App;
