import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import "antd/dist/antd.css";
import AppLayout from "./containers/AppLayout/AppLayout";
import React from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
          <PrivateRoute exact path="/" name="/" component={AppLayout} />
          <PrivateRoute exact path="/photos" name="photos" component={AppLayout} />
          <PrivateRoute exact path="/albums" name="albums" component={AppLayout} />
          <PrivateRoute exact path="/albums/:id" name="detailed albums" component={AppLayout} />
          <PrivateRoute exact path="/folders/:id" name="detailed folders" component={AppLayout} />
          <PrivateRoute exact path="/shared" name="photos" component={AppLayout} />
          <PrivateRoute exact path="/shared/:id" name="photos" component={AppLayout} />
          <PrivateRoute exact path="/trash" name="albums" component={AppLayout} />
          <PrivateRoute exact path="/profile" name="profile" component={AppLayout} />
          <PrivateRoute exact path="/search" name="search" component={AppLayout} />
          <PrivateRoute exact path="/admin" name="admin" component={AppLayout} />
          <Route exact path="/login" name="login" component={Login} />
          <Route exact path="/register" name="login" component={Register} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
