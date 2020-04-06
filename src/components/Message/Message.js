import React from "react";
import { GameContext } from "./../../context/GameContext";
import "./Message.scss";

const Message = ({ className, content, restartGame }) => {
  const onClickHandler = () => {
    restartGame();
  };

  return (
    <div className={`message message--${className}`}>
      <p>{content}</p>
      <button onClick={onClickHandler}>Reiniciar</button>
    </div>
  );
};

export default Message;
