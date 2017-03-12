import React, { Component } from 'react';
import NavBar from './components/NavBar';
import List from './components/List';
import mock from './mock'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {tickets:mock.tickets};
    this.updateTickets = this.updateTickets.bind(this);
  }

  updateTickets(tks){
    this.setState({tickets:tks});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>STickey App</h2>
        </div>
        <NavBar update={this.updateTickets}/>
        <List tickets={this.state.tickets} />
      </div>
    );
  }
}

export default App;
