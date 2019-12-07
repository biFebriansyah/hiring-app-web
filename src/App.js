import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {ProtectedRoute} from './auth/ProtectRoute'
import Welcome from './view/Welcome/Welcome';
import Login from './view/Login/Login';
import Register from './view/Register/Register';
import ProfileEngineer from './view/ProfileEngineer/ProfileEngineer'
import Landing from './view/Landing/Landing';
import RegisterEngineer from './view/RegisterEngineer/RegisterEngineer'
import RegisterCompany from './view/RegisterCompany/RegisterCompany'
import ProjectCompany from './view/ProjectCompany/ProjectCompany'
import ProfileCompany from "./view/ProfileCompany/ProfileCompany";
import DetailEngineer from "./view/DetailEngineer/DetailEngineer";
import Test from "./view/test/Test";
import Hiring from "./view/FormHiring/FormHiring";

class App extends Component {
   render() {
      return (
         <BrowserRouter>
            <ProtectedRoute exact path="/profile/:username" component={ProfileEngineer} />
            <ProtectedRoute exact path="/home" component={Landing} />
            <Route exact path="/" component={Welcome} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/engineer/:username" component={RegisterEngineer} />
            <Route exact path="/company/:username" component={RegisterCompany} />
            <ProtectedRoute exact path="/create/:username" component={ProjectCompany} />
            <ProtectedRoute exact path="/hiring/:username" component={Hiring} />
            <ProtectedRoute exact path="/test" component={Test} />
            <ProtectedRoute exact path="/profilec/:username" component={ProfileCompany} />
            <ProtectedRoute exact path="/Detail/:username" component={DetailEngineer} />
         </BrowserRouter>
      );
   }
}

export default App;
