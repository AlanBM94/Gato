import React from "react";
import ConnectionFailedMessage from "./components/ConnectionFailedMessage/ConnectionFailedMessage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Board from "./components/Board/Board";
import { GameContexProvider } from "./context/GameContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GameContexProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Board} />
            <Route
              path="/connectionFailed"
              exact
              component={ConnectionFailedMessage}
            />
          </Switch>
        </Router>
      </GameContexProvider>
    </div>
  );
}

export default App;
