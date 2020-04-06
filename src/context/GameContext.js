import React, { createContext, useReducer } from "react";
import gameReducer from "./gameReducer";

export const initialState = {
  board: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  player1: {
    turn: true,
    win: false,
  },
  player2: {
    turn: false,
    win: false,
  },
  gameOver: false,
  tie: false,
  someoneWin: false,
  isATie: false,
};

export const GameContext = createContext(initialState);

export const GameContexProvider = ({ children }) => {
  const [gameState, dispatch] = useReducer(gameReducer, initialState);

  const pressInTurn = (player) => {
    dispatch({ type: "PRESS_IN_TURN", payload: { player } });
  };

  const setBoard = (xCoordinate, yCoordinate, sign) => {
    dispatch({
      type: "SET_BOARD",
      payload: { xCoordinate, yCoordinate, sign },
    });
  };

  const checkIfSomeoneWin = () => {
    dispatch({ type: "CHECK_IF_SOMEONE_WIN" });
  };

  const restartGame = () => {
    dispatch({ type: "RESTART_GAME" });
  };

  return (
    <GameContext.Provider
      value={{
        gameState,
        pressInTurn,
        setBoard,
        checkIfSomeoneWin,
        restartGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
