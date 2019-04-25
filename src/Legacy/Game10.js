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
        Bloons Tower Defence 5
          </div>
          <div className="Main">
          <br/>
          <iframe src="https://www.crazygames.com/gameframe/bloons-tower-defense-5" width="800" height="665"  marginwidth="0" marginheight="0" hspace="0" vspace="0"  frameborder="0" scrolling="no"  webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
