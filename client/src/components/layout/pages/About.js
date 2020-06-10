import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <p className="large fw-700">About Us</p>
      <p className="medium fw-500">
        Watchman helps you to keep your contacts safe...
      </p>
      <p className="small fw-400 alert grey darken-4 white-text">
        Version 1.0.2
      </p>
      <div
        style={{ width: "8rem" }}
        className=" white-text darken-3 small fw-700 ">
        <Link className="btn teal darken-4" to="/">
          Back{" "}
        </Link>
      </div>
    </div>
  );
};

export default About;
