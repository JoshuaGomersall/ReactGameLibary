import React, { Component } from 'react';
import './App.css';
import vapore from "./vapore.mp3";

import { BrowserRouter as Router, Route ,NavLink} from "react-router-dom";


import GameIMG1 from "./Game1.PNG";
import GameIMG2 from "./Game2.PNG";

import Game1 from "./Game1.js";
import Game2 from "./Game2.js";
import Game3 from "./Game3.js";
import Game4 from "./Game4.js";
import Game5 from "./Game5.js";
import Game6 from "./Game6.js";
import Game7 from "./Game7.js";
import Game8 from "./Game8.js";
import Game9 from "./Game9.js";


class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">

          <div className="Banner">
          <a href="/">
            QAG
<br />
            Quality Assured Gaming
            </a>
</div>


        <Route exact path="/game1" component={Game1} />
        <Route exact path="/game2" component={Game2} />
        <Route exact path="/game3" component={Game3} />
        <Route exact path="/game4" component={Game4} />
        <Route exact path="/game5" component={Game5} />
        <Route exact path="/game6" component={Game6} />

          <div className="Main">
            <audio src={vapore} autoPlay/>
            <br />
            <div className="flex">
              <div className="gamepanel">
                Game 1
              <br/>
                <a href="game1">
                  <img src={GameIMG2} width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Game 2
              <br />
              <a href="game2">
                  <img src={GameIMG1} width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Game 3
              <br />
              <a href="Game3">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="gamepanel">
                Game 4
              <br />
              <a href="Game4">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Game 5
              <br />
              <a href="Game5">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Game 6
              <br />
              <a href="Game6">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="gamepanel">
                Game 7
              <br />
              <a href="Game7">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Game 8
              <br />
              <a href="Game8">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Game 9
              <br />
              <a href="Game9">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
