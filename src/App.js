import React from "react";
import Board from "./components/Board/Board";
import { GameContexProvider } from "./context/GameContext";

import "./App.css";

function App() {
  return (
    <div className="App">
      <GameContexProvider>
        <Board />
      </GameContexProvider>
    </div>
  );
}

export default App;
