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
    rows: 0,
    columns: 0,
    win: false,
  },
  player2: {
    turn: false,
    rows: 0,
    columns: 0,
    win: false,
  },
  gameOver: false,
  tie: false,
  someoneWin: false,
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

  return (
    <GameContext.Provider
      value={{ gameState, pressInTurn, setBoard, checkIfSomeoneWin }}
    >
      {children}
    </GameContext.Provider>
  );
};
