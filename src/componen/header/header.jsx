import React, {Component} from "react";
import './scss/header.scss';
import {Link} from 'react-router-dom';
import Cards from '../cards/cards';
import sample from './img/sample.jpeg';
import sample1 from './img/sample1.jpg';
import sample2 from './img/sample2.jpg';
import sample4 from './img/sample4.jpg';
import sample3 from './img/Sample3.jpg';
import sample5 from './img/sample5.jpg';
import sample6 from './img/sample6.jpg';
import sample7 from './img/sample7.jpg';
import sample8 from './img/sample8.jpg';
import sample9 from './img/sample9.jpg';
import sample10 from './img/sample10.jpg';

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
         <div className="card-componen">
            <Cards src={sample}/>
            <Cards src={sample1}/>
            <Cards src={sample2}/>
            <Cards src={sample3}/>
            <Cards src={sample4}/>
            <Cards src={sample5}/>
            <Cards src={sample6}/>
            <Cards src={sample7}/>
            <Cards src={sample8}/>
            <Cards src={sample9}/>
            <Cards src={sample10}/>
         </div>
         </div>
      );
   }
};

export default Header;
