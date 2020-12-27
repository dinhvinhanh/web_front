import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import User from "./containers/User/User";
import "antd/dist/antd.css";
import AppLayout from "./containers/AppLayout/AppLayout";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" name="/" component={AppLayout} />
          <Route exact path="/photos" name="photos" component={AppLayout} />
          <Route exact path="/albums" name="albums" component={AppLayout} />
          <Route exact path="/login" name="login" component={Login} />
          <Route exact path="/user" name="user" component={User} />

      </Switch>
    </BrowserRouter>
  );
};

export default App;
