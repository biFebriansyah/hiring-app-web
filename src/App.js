import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import "./scss/App.scss";
import {ProtectedRoute} from './auth/protectRoute'
import welcome from './componen/welcome/welcome';
import Login from './componen/login/login';
import Register from './componen/register/register';
import ProfileEngineer from './componen/profile-engineer/ProfileEngineer'
import Landing from './componen/landing/landing';
import Engineer from './componen/regis-engineer/engineer'

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <Route exact path="/" component={welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/engineer" component={Engineer} />
            <ProtectedRoute exact path="/profile" component={ProfileEngineer} />
            <ProtectedRoute exact path="/home" component={Landing} />
         </BrowserRouter>
      );
   }
}

export default App;
