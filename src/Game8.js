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
        Bullet Force
          </div>
          <div className="Main">
          <br/>
          <iframe src="https://www.crazygames.com/gameframe/bullet-force-multiplayer" width="80%" height="545"  marginwidth="0" marginheight="0" hspace="0" vspace="0"  frameborder="0" scrolling="no"  webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
