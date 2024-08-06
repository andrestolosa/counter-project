import React from 'react';
import './App.css'
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <>
    <div className='app'> 
      <div><Header /></div>     
    </div>
    <div>
    <div className='content'>
        <h1>COUNTER GAME</h1>
        <div className='firstCounter'><Content /></div>
        <div className='secondCounter'><Content /></div>
      </div> 
    </div>
    </>
    
  );
}

export default App;
