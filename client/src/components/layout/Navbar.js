import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import ContactContext from "../context/contact/contactContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const onClick = () => {
    logout();
    clearContacts();
  };
  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/">
          <span className="small">
            Hello{" "}
            {user && user.name.charAt(0).toUpperCase() + user.name.slice(1)}
          </span>
        </Link>
      </li>
      <li>
        <Link to="/about">
          {" "}
          <span className="small">About</span>
        </Link>
      </li>
      <li>
        <Link onClick={onClick} to="/login">
          <i className="fa fa-sign-out"></i>{" "}
          <span className="small">Logout</span>
        </Link>
      </li>
    </Fragment>
  );
  const authLinks = (
    <Fragment>
      <li>
        <Link to="/about">
          <span className="small">About</span>
        </Link>
      </li>
    </Fragment>
  );
  return (
    <Fragment>
      <nav className="grey darken-4">
        <div className="contain">
          <div className="nav-wrapper">
            <a
              style={{ marginLeft: "3.5rem" }}
              href="#!"
              className="brand-logo fw-700  left ">
              <span className="fa fa-id-card mx-1 "></span>
              Watch<span className=" teal-text">Man</span>
            </a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              {isAuthenticated === true ? guestLinks : authLinks}
            </ul>
          </div>
        </div>
      </nav>

      <ul className="sidenav" id="mobile-demo">
        {isAuthenticated === true ? guestLinks : authLinks}
      </ul>
    </Fragment>
  );
};

export default Navbar;
