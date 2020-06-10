import React, { useContext, useState, useEffect, Fragment } from "react";
import Alert from "../layout/Alert";
import Preloader from "../layout/Preloader";
import spinner from "../layout/835.gif";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
const Register = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;
  const authContext = useContext(AuthContext);
  const {
    loading,
    register,
    error,
    clearErrors,
    isAuthenticated,
  } = authContext;
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  useEffect(() => {
    if (error !== null) {
      if (error === "Server error") {
        setAlert(
          "Make sure you have a working internet connection",
          "teal white-text darken-3"
        );
        clearErrors();
      } else {
        setAlert(error, "teal white-text darken-3");
        clearErrors();
      }
    }
    if (isAuthenticated === true) {
      props.history.push("/");
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const onChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || password2 === "") {
      setAlert(
        "Please enter all the fields to register",
        "teal white-text darken-3"
      );
    } else if (password !== password2) {
      setAlert("Password doesnot match", "teal white-text darken-3");
    } else {
      register(user);
    }
  };
  return (
    <Fragment>
      <div className="container white-text myregister">
        <div className="row my ">
          <Alert />
          <div className="col s12 m6 offset-m3">
            <div className="center">
              {" "}
              {loading && <Preloader spinner={spinner} />}
            </div>
            <div className="card grey darken-4">
              <div className="card-content">
                <form onSubmit={onSubmit}>
                  <span className="small fw-500">Username</span>
                  <input
                    onChange={onChange}
                    value={name}
                    type="text"
                    name="name"
                    className="browser-default  myinput"
                  />
                  <span className="small fw-500 ">Email</span>
                  <input
                    value={email}
                    type="email"
                    name="email"
                    onChange={onChange}
                    className="browser-default  myinput"
                  />{" "}
                  <span className="small fw-500">Password</span>
                  <input
                    value={password}
                    type="password"
                    name="password"
                    onChange={onChange}
                    className="browser-default  myinput"
                  />{" "}
                  <span className="small fw-500">Confirm password</span>
                  <input
                    value={password2}
                    type="password"
                    name="password2"
                    onChange={onChange}
                    className="browser-default  myinput"
                  />
                  <input
                    type="submit"
                    style={{ width: "100%", marginTop: "1.5rem" }}
                    className="btn teal darken-4"
                    value="Register"
                  />
                </form>
              </div>
            </div>
            <div className=" white-text darken-3 small fw-700 text-center">
              <span className="black-text mx-1">Already Registered ?</span>
              <Link className="btn-small  teal darken-4" to="/login">
                {" "}
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer style={style} />
    </Fragment>
  );
};
const style = {
  marginTop: "1.5rem",
};
export default Register;
