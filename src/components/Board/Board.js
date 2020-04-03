import React from "react";
import SignButton from "./../SignButton/SignButton";
import "./Board.scss";

const Board = () => {
  return (
    <div className="board">
      <SignButton position="top-left" xAxis="0" yAxis="0" />
      <SignButton position="top-center" xAxis="1" yAxis="0" />
      <SignButton position="top-right" xAxis="2" yAxis="0" />
      <SignButton position="middle-left" xAxis="0" yAxis="1" />
      <SignButton position="middle-center" xAxis="1" yAxis="1" />
      <SignButton position="middle-right" xAxis="2" yAxis="1" />
      <SignButton position="bottom-left" xAxis="0" yAxis="2" />
      <SignButton position="bottom-center" xAxis="1" yAxis="2" />
      <SignButton position="bottom-right" xAxis="2" yAxis="2" />
    </div>
  );
};

export default Board;
