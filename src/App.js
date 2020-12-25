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
          <Route exact path="/photos" name="photos" component={AppLayout} />
          <Route exact path="/albums" name="albums" component={AppLayout} />
          <Route exact path="/albums/:id" name="detailed albums" component={AppLayout} />
          <Route exact path="/folders/:id" name="detailed folders" component={AppLayout} />
          <Route exact path="/shared" name="photos" component={AppLayout} />
          <Route exact path="/shared/:id" name="photos" component={AppLayout} />
          <Route exact path="/trash" name="albums" component={AppLayout} />
          <Route exact path="/login" name="login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
