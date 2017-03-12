import React from 'react';
import NavBar from './components/NavBar';
import List from './components/List';
import logo from './logo.svg';
import './App.css';

const App = ()=>{
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>STickey App</h2>
      </div>
      <NavBar />
      <List />
    </div>
  );
}

export default App;
