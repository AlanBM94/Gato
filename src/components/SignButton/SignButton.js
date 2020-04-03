import React from "react";
import "./SignButton.scss";

const SignButton = ({ position }) => {
  return <div className={`signButton signButton--${position}`}></div>;
};

export default SignButton;
