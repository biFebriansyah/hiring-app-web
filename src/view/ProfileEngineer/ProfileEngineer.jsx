import React, { Component,  } from "react";
import "./scss/ProfileEngineer.scss";
import heroImg from "./img/alaska.jpg";
import Headers from '../../components/Header/Header';
import CardProject from '../../components/cardProject/CardProject';
import {connect} from 'react-redux';


class ProfileEngineer extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         imgSrc: heroImg
      }
   }
   render() {
      return (
         <div>
         <Headers></Headers>
         <div className="Detail-parent-container">
         <div className="Box-Prfile-engi">
            <div className="Detail-img-container">
               <div className="Detail-section">
               </div>
               <img src={this.props.dataUser.photo} alt="hero-img" ref={this.img} />
            </div>
            <div className="Detail-content Detailname">
               <div className="Detail-top">
                  <div className="Detail-engineer">
                     <h2>{this.props.dataUser.name}</h2>
                  </div>
                  <div className="Detail-engineer Detailrule">
                     <h3>Desktop Developer</h3>
                  </div>
                  <div className="Detail-engineer Detailskil">
                     <h3>{this.props.dataUser.skill}</h3>
                  </div>
               </div>
               <CardProject></CardProject>
            </div>
            
         </div>
      </div>
      </div>
      );
   }
}

const mapStateToProps = state => {
   return {
      dataUser: state.data.userData
   }
 }

export default connect(mapStateToProps)(ProfileEngineer);
