import React from "react";
import "./overlay.css";

const Overlay = (props) => {
  return <div onClick={props.close} className="overlay"></div>;
};

export default Overlay;
