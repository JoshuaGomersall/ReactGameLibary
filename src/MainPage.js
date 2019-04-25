import React, { Component } from 'react';
import './App.css';
import vapore from "./vapore.mp3";
import so from "./so.mp3";

import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

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
import GameIMG11 from "./img/Game11.PNG";
import GameIMG12 from "./img/Game12.PNG";
import GameIMG13 from "./img/Game13.PNG";
import GameIMG14 from "./img/Game14.PNG";
import GameIMG15 from "./img/Game15.PNG";

import Game from "./GameTemplate";


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


            <Route exact path="/game1" render={() => <Game name='Dog Miner 2' url='https://www.crazygames.com/gameframe/doge-miner-2' />} />
            <Route exact path="/game2" render={() => <Game name='V4P3R W4V3' url='https://pmneila.github.io/jsexp/grayscott/' />} />
            <Route exact path="/game3" render={() => <Game name='Snake' url='http://patorjk.com/games/snake/' />} />
            <Route exact path="/game4" render={() => <Game name='Slither' url='http://slither.io/' />} />
            <Route exact path="/game5" render={() => <Game name='Learn To Fly' url='https://www.crazygames.com/gameframe/learn-to-fly' />} />
            <Route exact path="/game6" render={() => <Game name='Learn To Fly 2' url='https://www.crazygames.com/gameframe/learn-to-fly-2' />} />
            <Route exact path="/game7" render={() => <Game name='Learn To Fly 3' url='https://www.crazygames.com/gameframe/learn-to-fly-3' />} />
            <Route exact path="/game8" render={() => <Game name='Bullet Force' url='https://www.crazygames.com/gameframe/bullet-force-multiplayer' />} />
            <Route exact path="/game9" render={() => <Game name='Crazy Roller 3D' url='https://www.crazygames.com/gameframe/crazy-roll-3d' />} />
            <Route exact path="/game10" render={() => <Game name='Bloons Tower Defence 5' url='https://www.crazygames.com/gameframe/bloons-tower-defense-5' />} />
            <Route exact path="/game11" render={() => <Game name='RoofTop Snipers' url='https://www.crazygames.com/gameframe/rooftop-snipers' />} />
            <Route exact path="/game12" render={() => <Game name='Air War 2' url='https://www.crazygames.com/gameframe/air-wars-2' />} />
            <Route exact path="/game13" render={() => <Game name='Chess' url='https://www.crazygames.com/gameframe/sparkchess' />} />
            <Route exact path="/game14" render={() => <Game name='Impossible Quiz' url='https://www.crazygames.com/gameframe/the-impossible-quiz' />} />
            <Route exact path="/game15" render={() => <Game name='SnowBall' url='https://www.crazygames.com/gameframe/snowball-io' />} />

            


            <div className="Main">
              <audio src={vapore} loop autoPlay />
              <audio src={so} loop autoPlay />
              <div className="flex">
                <div className="gamepanel">
                  Dog Miner 2
              <br />
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
                  Learn To Fly
              <br />
                  <a href="Game5">
                    <img src={GameIMG6} alt="Trulli" width="150" height="130" />
                  </a>
                </div>

                <div className="gamepanel">
                  Learn To Fly 2
              <br />
                  <a href="Game6">
                    <img src={GameIMG5} alt="Trulli" width="150" height="130" />
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
                  RoofTop snipers
              <br />
                  <a href="Game11">
                    <img src={GameIMG11} alt="Trulli" width="150" height="130" />
                  </a>
                </div>

                <div className="gamepanel">
                  Air War 2
              <br />
                  <a href="Game12">
                    <img src={GameIMG12} alt="Trulli" width="150" height="130" />
                  </a>
                </div>
              </div>

              <div className="flex">
                <div className="gamepanel">
                  Chess
              <br />
                  <a href="Game13">
                    <img src={GameIMG13} alt="Trulli" width="150" height="130" />
                  </a>
                </div>

                <div className="gamepanel">
                  Impossible Quiz
              <br />
                  <a href="Game14">
                    <img src={GameIMG14} alt="Trulli" width="150" height="130" />
                  </a>
                </div>

                <div className="gamepanel">
                  Snow Ball
              <br />
                  <a href="Game15">
                    <img src={GameIMG15} alt="Trulli" width="150" height="130" />
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
