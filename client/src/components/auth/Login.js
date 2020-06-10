import React, { useContext, useState, useEffect, Fragment } from "react";
import Alert from "../layout/Alert";
import Preloader from "../layout/Preloader";
import spinner from "../layout/835.gif";
import AuthContext from "../context/auth/authContext";
import AlertContext from "../context/alert/alertContext";
import { Link } from "react-router-dom";
import Footer from "../../components/layout/Footer";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;
  const authContext = useContext(AuthContext);
  const { loading, login, error, clearErrors, isAuthenticated } = authContext;
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
    if (email === "" || password === "") {
      setAlert(
        "Please enter all the fields to login",
        "teal white-text darken-3"
      );
    } else {
      login(user);
    }
  };
  return (
    <Fragment>
      <div className="container white-text mylogin">
        <div className="row section ">
          <Alert />
          <div className="col s12 m6 offset-m3">
            <div className="center">
              {" "}
              {loading && <Preloader spinner={spinner} />}
            </div>
            <div className="card grey darken-4">
              <div className="card-content">
                <form onSubmit={onSubmit}>
                  <p className="pencil fw-500 ">Email</p>
                  <input
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                    value={email}
                    type="email"
                    name="email"
                    onChange={onChange}
                    className="browser-default  myinput"
                  />{" "}
                  <p className="pencil fw-500">Password</p>
                  <input
                    style={{ marginTop: "1rem", marginBottom: "1rem" }}
                    value={password}
                    type="password"
                    name="password"
                    onChange={onChange}
                    className="browser-default  myinput"
                  />{" "}
                  <input
                    style={{ marginTop: "1.5rem" }}
                    type="submit"
                    className="btn teal darken-4"
                    value="Login"
                  />
                </form>
              </div>
            </div>

            <div className="alert white-text darken-3 small fw-700 text-center">
              <span className="black-text mx-1">Not Registered yet ?</span>
              <Link className="btn-small my-1  teal darken-4" to="/register">
                {" "}
                Sign Up
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
  marginTop: "4.5rem",
};
export default Login;
