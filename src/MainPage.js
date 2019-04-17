import React, { Component } from 'react';
import './App.css';
import vapore from "./vapore.mp3";

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <div className="Banner">
          <a href="/">
            QAG
<br />
            Quality Assured Gaming
            </a>
</div>
          <div className="Main">
            <audio src={vapore} autoPlay/>
            <br />
            <div className="flex">
              <div className="gamepanel">
                Game 1
              <br />
                <a href="Game1">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
                </a>
              </div>

              <div className="gamepanel">
                Game 2
              <br />
              <a href="Game2">
                  <img src="https://hips.hearstapps.com/esq.h-cdn.co/assets/16/33/1280x960/sd-aspect-1471537670-es-081716-vaporwave.jpg?resize=768:*" alt="Trulli" width="150" height="130" />
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
    );
  }
}

export default App;
