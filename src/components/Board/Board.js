import React, { useState, useContext, useEffect } from "react";
import SignButton from "./../SignButton/SignButton";
import Message from "./../Message/Message";
import WelcomeMessage from "./../WelcomeMessage/WelcomeMessage";
import { Redirect } from "react-router-dom";
import { GameContext } from "./../../context/GameContext";
import io from "socket.io-client";
import "./Board.scss";

let socket;

const Board = () => {
  const [gameHasFinished, setGameHasFinished] = useState(false);
  const [moreThanTwoPlayers, setMoreThanTwoPlayers] = useState(false);
  const [buttonPressedFromServer, setButtonPressedFromServer] = useState(null);
  const [buttons, setButtons] = useState([]);
  const [welcomeMessages, setWelcomeMessages] = useState([]);
  const {
    gameState,
    restartGame,
    setBoard,
    checkIfSomeoneWin,
    changeTurn,
  } = useContext(GameContext);
  const ENDPOINT = "localhost:5000";
  const room = "game";

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("join", { room }, () => {});

    socket.on("connectionFailed", ({ connectionFailed }) => {
      setMoreThanTwoPlayers(connectionFailed);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on("message", ({ text }) => {
      setWelcomeMessages([...welcomeMessages, `${text}`]);
    });
  });

  useEffect(() => {
    socket.on("setBoard", ({ xAxis, yAxis, sign }) => {
      changeTurn();
      gameState.player1.turn
        ? setBoard(xAxis, yAxis, sign)
        : setBoard(xAxis, yAxis, sign);
      checkIfSomeoneWin();
      setButtonPressedFromServer({ xAxis, yAxis, sign });
      setButtonPressedFromServer(null);
    });
  }, [setBoard, changeTurn, checkIfSomeoneWin]);

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

  const createClassName = () => {
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

  const updateBoardStateHandler = (xAxis, yAxis, sign) => {
    socket.emit("buttonPressed", { xAxis, yAxis, sign });

    if (gameState.gameOver) {
      setGameHasFinished(true);
      createMessage();
      createClassName();
    }
  };

  const restartGameHandler = () => {
    setGameHasFinished(false);
    restartGame();
  };

  const content = gameHasFinished ? (
    <Message
      className={createClassName()}
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
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="top-center"
        xAxis="1"
        yAxis="0"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="top-right"
        xAxis="2"
        yAxis="0"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="middle-left"
        xAxis="0"
        yAxis="1"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="middle-center"
        xAxis="1"
        yAxis="1"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="middle-right"
        xAxis="2"
        yAxis="1"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="bottom-left"
        xAxis="0"
        yAxis="2"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="bottom-center"
        xAxis="1"
        yAxis="2"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
      <SignButton
        position="bottom-right"
        xAxis="2"
        yAxis="2"
        updateBoardState={updateBoardStateHandler}
        buttonPressedFromServer={buttonPressedFromServer}
      />
    </>
  );

  return moreThanTwoPlayers ? (
    <Redirect to="/connectionFailed" />
  ) : (
    <>
      <WelcomeMessage messages={welcomeMessages} />
      <div className="board">{content}</div>
    </>
  );
};

export default Board;
