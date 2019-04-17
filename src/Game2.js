import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from "./MainPage";
import 'bootstrap/dist/css/bootstrap.css';
import Iframe from 'react-iframe';

class App extends Component {
  
  
  render() {
    return (
      <div>
        <header >
        <div className="Banner">
        Game 2
          </div>
          <div className="Main">
          <iframe src="https://pmneila.github.io/jsexp/grayscott/" width="540" height="450"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
