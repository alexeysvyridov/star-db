import React from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet/random-planet';
import ItemList from '../item-list';
import './app.css';

function App() {
  return (
    <div className="App">
      <Header />
      <RandomPlanet />
      <ItemList />
    </div>
  );
}

export default App;
