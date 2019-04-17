import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <MainPage/>
        </header>
      </div>
    );
  }
}

export default App;
