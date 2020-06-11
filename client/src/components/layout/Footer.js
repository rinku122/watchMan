import React from "react";

const Footer = (props) => {
  return (
    <div style={props.style} className="grey darken-4 myfooter">
      <div className="grid-2   ">
        <div className="content ">
          <p className="small white-text fw-500 text-center">
            Code and design by Rajesh
          </p>
        </div>
        <div className="links   self-hcenter">
          <ul className="flex">
            <li className="px-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/devrinku">
                <i className="fa fa-github fa-2x "></i>{" "}
              </a>
            </li>
            <li className="px-2">
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/rinku1221995/">
                <i className="fa fa-instagram fa-2x"></i>
              </a>
            </li>
            <li className="px-2">
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/rajesh.pardhan.3/">
                <i className="fa fa-facebook fa-2x"></i>
              </a>
            </li>
            <li className="px-2">
              {" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Rajeshk29278950">
                <i className="fa fa-twitter fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center p-2">
        <span className="small   fw-400 grey-text text-center">
          {" "}
          Copyright &nbsp; © 2020 &nbsp; Watch
          <span className="teal-text darken-4">Man </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
