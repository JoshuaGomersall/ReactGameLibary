import React, { Component } from 'react';
import './App.css';
import vapore from "./vapore.mp3";
import so from "./so.mp3";

import { BrowserRouter as Router, Route ,NavLink} from "react-router-dom";


import GameIMG1 from "./img/Game1.PNG";
import GameIMG2 from "./img/Game2.PNG";
import GameIMG3 from "./img/Game3.PNG";
import GameIMG4 from "./img/Game4.PNG";
import GameIMG5 from "./img/Game5.PNG";
import GameIMG6 from "./img/Game6.PNG";
import GameIMG7 from "./img/Game7.PNG";
import GameIMG8 from "./img/Game8.PNG";
import GameIMG9 from "./img/Game9.PNG";
import GameIMG10 from "./img/Game10.PNG";

import Game1 from "./Game1.js";
import Game2 from "./Game2.js";
import Game3 from "./Game3.js";
import Game4 from "./Game4.js";
import Game5 from "./Game5.js";
import Game6 from "./Game6.js";
import Game7 from "./Game7.js";
import Game8 from "./Game8.js";
import Game9 from "./Game9.js";
import Game10 from "./Game10.js";

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
        <Route exact path="/game7" component={Game7} />
        <Route exact path="/game8" component={Game8} />
        <Route exact path="/game9" component={Game9} />
        <Route exact path="/game10" component={Game10} />

          <div className="Main">
            <audio src={vapore} loop autoPlay/>
            <audio src={so} loop autoPlay/>
            <div className="flex">
              <div className="gamepanel">
                Dog Miner 2
              <br/>
                <a href="game1">
                  <img src={GameIMG2} width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
              W4V3 V4P0R3
              <br />
              <a href="game2">
                  <img src={GameIMG1} width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Snake
              <br />
              <a href="Game3">
                  <img src={GameIMG3} alt="Trulli" width="150" height="130" />
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="gamepanel">
                Slither
              <br />
              <a href="Game4">
                  <img src={GameIMG4} width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Learn To Fly 2
              <br />
              <a href="Game5">
                  <img src={GameIMG5} alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Learn To Fly
              <br />
              <a href="Game6">
                  <img src={GameIMG6} alt="Trulli" width="150" height="130" />
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="gamepanel">
                Learn To Fly 3
              <br />
              <a href="Game7">
                  <img src={GameIMG7} alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Bullet Force
              <br />
              <a href="Game8">
                  <img src={GameIMG8} alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Crazy Roll 3D
              <br />
              <a href="Game9">
                  <img src={GameIMG9} alt="Trulli" width="150" height="130" />
                </a>
              </div>
            </div>

            <div className="flex">
              <div className="gamepanel">
                Bloons Tower Defence 5
              <br />
              <a href="Game10">
                  <img src={GameIMG10} alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Bullet Force
              <br />
              <a href="Game11">
                  <img src={GameIMG8} alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Crazy Roll 3D
              <br />
              <a href="Game12">
                  <img src={GameIMG9} alt="Trulli" width="150" height="130" />
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
