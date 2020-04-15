import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Board from "./components/Board/Board";
import { GameContexProvider } from "./context/GameContext";

import "./App.css";

let socket;

const Error = () => {
  return <p>Este es un error</p>;
};

function App() {
  return (
    <div className="App">
      <GameContexProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Board} />
            <Route path="/connectionFailed" exact component={Error} />
          </Switch>
        </Router>
      </GameContexProvider>
    </div>
  );
}

export default App;
