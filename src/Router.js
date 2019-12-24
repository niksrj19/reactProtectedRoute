import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Public from "./Public";
import Protected from "./Private";
import Auth from "./Auth";
const Router = props => (
  <Switch>
    <Route exact path="/public" component={Public} />
    <PrivateRoute path="/private" component={Protected} />
  </Switch>
);

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.getAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

export default Router;
