import React from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./Home";
import SignIn from "../screens/SignIn";

const App = () => {
  return (
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/signin" component={SignIn} exact />
    </Switch>
  );
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
};

export default connect(mapStateToProps)(App);
