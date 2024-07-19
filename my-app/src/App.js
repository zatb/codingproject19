// U36432650
import React from 'react';
import './App.css';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Tour Comparison App</h1>
      </header>
      <main>
        <Gallery /> {/*Acts as the main container for the tour list component, typically named Gallery.js*/}
      </main>
    </div>
  );
}

export default App;