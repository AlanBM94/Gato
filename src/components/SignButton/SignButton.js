import React, { useState, useContext, useEffect } from "react";
import { GameContext } from "./../../context/GameContext";
import "./SignButton.scss";

const SignButton = ({
  position,
  xAxis,
  yAxis,
  updateBoardState,
  buttonPressedFromServer,
}) => {
  const [isPressed, setIsPressed] = useState(false);
  const [currentSign, setCurrentSign] = useState();
  const [pressedFromServer, setPressedFromServer] = useState();
  const { gameState, changeTurn, setBoard, checkIfSomeoneWin } = useContext(
    GameContext
  );

  let sign;

  const clickHandler = () => {
    sign = gameState.player1.turn ? "o" : "x";
    changeTurn();
    setIsPressed(true);
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
    updateBoardState(xAxis, yAxis, sign);
  };

  useEffect(() => {
    setPressedFromServer(buttonPressedFromServer);
    if (
      pressedFromServer &&
      pressedFromServer.xAxis === xAxis &&
      pressedFromServer.yAxis === yAxis
    ) {
      setIsPressed(true);
      setCurrentSign(
        pressedFromServer.sign === "o" ? (
          <i className="far fa-circle sign sign--pink"></i>
        ) : (
          <i className="fas fa-times sign sign--blue"></i>
        )
      );
    }
  }, [buttonPressedFromServer]);

  return (
    <button
      className={`signButton signButton--${position}`}
      onClick={clickHandler}
      disabled={isPressed}
    >
      {isPressed && currentSign}
    </button>
  );
};

export default SignButton;
