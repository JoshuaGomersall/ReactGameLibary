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
          <iframe src="https://iwant2study.org/lookangejss/02_newtonianmechanics_2kinematics/ejss_model_reactionTime/reactionTime_Simulation.xhtml" width="540" height="450"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
