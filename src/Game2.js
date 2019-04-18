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
        W4V3 V4P0R3
          </div>
          <div className="Main">
          <br/>
          <iframe src="https://pmneila.github.io/jsexp/grayscott/" width="80%" height="450"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
