import React, {Component} from "react";
import './scss/header.scss';
import {Link} from 'react-router-dom';

class Header extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
          data : []
      }
   }

   componentDidMount() {

   }
   
   render(){
      return (
         <div>
         <header>
            <div className="container-header">
               <div className="img-header">
                  <img src={require("./img/logo.png")} alt="arkademy logo" />
               </div>
               <div className="search-header">
                  <div className="input-fild">
                     <span className="iconSearch icon-search"></span>
                     <input type="text" placeholder="Search" />
                  </div>
               </div>
               <div className="home-account">
                  <div className="home-parent">
                     <div className="text">
                        <Link to='/login'><h2>Login</h2></Link>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         </div>
      );
   }
};

export default Header;
