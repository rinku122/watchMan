import React from "react";

const Preloader = (props) => {
  return (
    <div className="container">
      <img src={props.spinner} alt="loading" />
    </div>
  );
};

export default Preloader;
