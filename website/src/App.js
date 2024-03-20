// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import WelcomeMessage from './components/WelcomeMessage';
import Buttons from './components/Buttons';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <Profile />
        <WelcomeMessage />
        <Buttons />
      </header>
    </div>
  );
}

export default App;
