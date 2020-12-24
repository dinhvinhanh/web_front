import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import "antd/dist/antd.css";
import AppLayout from "./containers/AppLayout/AppLayout";
import React from "react";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" name="/" component={AppLayout} />
          <Route exact path="/login" name="login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
