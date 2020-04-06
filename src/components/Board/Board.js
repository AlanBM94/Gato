import React, { useState, useContext } from "react";
import SignButton from "./../SignButton/SignButton";
import Message from "./../Message/Message";
import { GameContext } from "./../../context/GameContext";
import "./Board.scss";

const Board = () => {
  const [gameHasFinished, setGameHasFinished] = useState(false);
  const { gameState, restartGame } = useContext(GameContext);

  const createMessage = () => {
    let message;
    if (gameState.player1.win) {
      message = "El jugador uno ha ganado";
    } else if (gameState.player2.win) {
      message = "El jugador dos ha ganado";
    } else if (gameState.isATie) {
      message = "Es un empate!";
    }
    return message;
  };

  const createClass = () => {
    let classComponent;
    if (gameState.player1.win) {
      classComponent = "pink";
    } else if (gameState.player2.win) {
      classComponent = "blue";
    } else if (gameState.isATie) {
      classComponent = "purple";
    }
    return classComponent;
  };

  const updateBoardStateHandler = () => {
    if (gameState.gameOver) {
      setGameHasFinished(true);
      createMessage();
      createClass();
    }
  };

  const restartGameHandler = () => {
    setGameHasFinished(false);
    restartGame();
  };

  const content = gameHasFinished ? (
    <Message
      className={createClass()}
      content={createMessage()}
      restartGame={restartGameHandler}
    />
  ) : (
    <>
      <SignButton
        position="top-left"
        xAxis="0"
        yAxis="0"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="top-center"
        xAxis="1"
        yAxis="0"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="top-right"
        xAxis="2"
        yAxis="0"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="middle-left"
        xAxis="0"
        yAxis="1"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="middle-center"
        xAxis="1"
        yAxis="1"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="middle-right"
        xAxis="2"
        yAxis="1"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="bottom-left"
        xAxis="0"
        yAxis="2"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="bottom-center"
        xAxis="1"
        yAxis="2"
        updateBoardState={updateBoardStateHandler}
      />
      <SignButton
        position="bottom-right"
        xAxis="2"
        yAxis="2"
        updateBoardState={updateBoardStateHandler}
      />
    </>
  );

  return <div className="board">{content}</div>;
};

export default Board;
