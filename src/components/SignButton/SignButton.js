import React, { useState, useContext } from "react";
import { GameContext } from "./../../context/GameContext";
import "./SignButton.scss";

const SignButton = ({ position, xAxis, yAxis }) => {
  const [isPressed, setIsPressed] = useState();
  const [currentSign, setCurrentSign] = useState();
  const { gameState, pressInTurn, setBoard, checkIfSomeoneWin } = useContext(
    GameContext
  );

  const clickHandler = () => {
    setIsPressed(true);
    pressInTurn();
    setCurrentSign(
      gameState.player1.turn ? (
        <i className="fas fa-times sign sign--blue"></i>
      ) : (
        <i className="far fa-circle sign sign--pink"></i>
      )
    );
    gameState.player1.turn
      ? setBoard(xAxis, yAxis, "x")
      : setBoard(xAxis, yAxis, "o");
    checkIfSomeoneWin();
  };
  console.log(gameState);

  return (
    <div
      className={`signButton signButton--${position}`}
      onClick={clickHandler}
    >
      {isPressed && currentSign}
    </div>
  );
};

export default SignButton;
