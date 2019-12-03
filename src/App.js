import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {ProtectedRoute} from './auth/ProtectRoute'
import Welcome from './view/Welcome/Welcome';
import Login from './view/Login/Login';
import Register from './view/Register/Register';
import ProfileEngineer from './view/ProfileEngineer/ProfileEngineer'
import Landing from './view/Landing/Landing';
import RegisterEngineer from './view/RegisterEngineer/RegisterEngineer'

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <ProtectedRoute exact path="/profile" component={ProfileEngineer} />
            <ProtectedRoute exact path="/home" component={Landing} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/engineer/:username" component={RegisterEngineer} />
         </BrowserRouter>
      );
   }
}

export default App;
