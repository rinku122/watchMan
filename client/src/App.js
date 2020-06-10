import React, { useEffect, Fragment } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/pages/Home";
import About from "./components/layout/pages/About";
import ContactState from "./components/context/contact/ContactState";
import AlertState from "./components/context/alert/AlertState";
import AuthState from "./components/context/auth/AuthState";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import setAuthToken from "./components/utils/setAuthToken";
import PrivateRoute from "./components/auth/routing/PrivateRoute";
import "./App.css";
if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    M.AutoInit();
  });
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Fragment>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
}

export default App;
