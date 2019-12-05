import React, { Component } from "react";
import {BrowserRouter, Route} from 'react-router-dom';
import {ProtectedRoute} from './auth/ProtectRoute'
import Welcome from './view/Welcome/Welcome';
import Login from './view/Login/Login';
import Register from './view/Register/Register';
import ProfileEngineer from './view/ProfileEngineer/ProfileEngineer'
import Landing from './view/Landing/Landing';
import RegisterEngineer from './view/RegisterEngineer/RegisterEngineer'
import ProjectCompany from './view/ProjectCompany/ProjectCompany'
import ProfileCompany from "./view/ProfileCompany/ProfileCompany";
import DetailEngineer from "./view/DetailEngineer/DetailEngineer";

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
            <Route exact path="/create" component={ProjectCompany} />
            {/* <Route exact path="/test" component={Test} /> */}
            <ProtectedRoute exact path="/Profilec" component={ProfileCompany} />
            <ProtectedRoute exact path="/Detail/:username" component={DetailEngineer} />
         </BrowserRouter>
      );
   }
}

export default App;
