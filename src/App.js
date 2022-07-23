import React from 'react';
import Card from './components/card'

import Img from './components/img';

import './scss/style.css';

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
      <Img/>
      <Card/>
      </div>
    </div>
  );
}

export default App;
