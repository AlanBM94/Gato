import React from "react";
import cancel from "./../../img/cancel.svg";

import "./ConnectionFailedMessage.scss";

const ConnectionFailedMessage = () => {
  return (
    <div className="connectionFailedMessage">
      <img src={cancel} alt="error" />
      <p>No puede haber más de dos jugadores en línea</p>
    </div>
  );
};

export default ConnectionFailedMessage;
