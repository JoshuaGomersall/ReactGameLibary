import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Iframe from 'react-iframe';

class Game extends Component {
  
  render() {
    return (
      <div>
        <header >
        <div className="Banner">
        {this.props.name}
          </div>
          <div className="Main">
          <br/>
          <iframe src={this.props.url} width="80%" height="600px"  marginwidth="0" marginheight="0" hspace="0" vspace="0"  frameborder="0" scrolling="no"  webkitallowfullscreen="true" mozallowfullscreen="true" msallowfullscreen="true" allowfullscreen="true"></iframe>
          </div>
        </header>
      </div>
    );
  }
}

export default Game;
