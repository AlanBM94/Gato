import React from "react";
import SignButton from "./../SignButton/SignButton";
import "./Board.scss";

const Board = () => {
  return (
    <div className="board">
      <SignButton position="top-left" />
      <SignButton position="top-center" />
      <SignButton position="top-right" />
      <SignButton position="middle-left" />
      <SignButton position="middle-center" />
      <SignButton position="middle-right" />
      <SignButton position="bottom-left" />
      <SignButton position="bottom-center" />
      <SignButton position="bottom-right" />
    </div>
  );
};

export default Board;
