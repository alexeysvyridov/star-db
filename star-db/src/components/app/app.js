import React from 'react';
import Header from '../header'
import RandomPlanet from '../random-planet'
import './app.css';

function App() {
  return (  
    <div className="App">
    <main className="container">
      <Header />
      <RandomPlanet />
    </main>
    </div>
  );
}

export default App;
