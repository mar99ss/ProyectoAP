import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import Home from "./HomeComponent";
import Login from "./LoginComponent";
import Header from "./HeaderComponent";

class Main extends Component {
  render() {
    const HomePage = () => {
      return (
        <div>
          <Header />
          <Home />
        </div>
      );
    };

    const LoginPage = () => {
      return <Login />;
    };

    return (
      <div>
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(Main);
