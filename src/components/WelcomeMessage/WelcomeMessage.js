import React from "react";
import "./WelcomeMessage.scss";

const WelcomeMessage = ({ messages }) => {
  const createClassName = (message) =>
    message === "Bienvenido jugador 1" ? 1 : 2;

  return messages.map((message, index) => (
    <div
      key={index}
      className={`welcomeMessage welcomeMessage--player${createClassName(
        message
      )}`}
    >
      <p>{message}</p>
    </div>
  ));
};

export default WelcomeMessage;
