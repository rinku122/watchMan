import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authContext = useContext(AuthContext);
  const { token, isAuthenticated, loading } = authContext;
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null || (isAuthenticated === true && loading === false) ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
