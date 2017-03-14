import React from 'react';
import NavBar from './containers/NavBar';
import TicketList from './containers/TicketList';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './App.css';

const App = ()=>{
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>STickey App</h2>
      </div>
      <NavBar />
      <TicketList />
    </div>
  );
}

export default App;
