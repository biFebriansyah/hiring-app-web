import React, { Component,  } from "react";
import {Link} from 'react-router-dom'
import "./scss/ProfileEngineer.scss";
import sample1 from './img/ilyuza-mingazova-qX1WTzBY_hI-unsplash.jpg'
import close from './img/cancel.svg';


class ProfileEngineer extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
          
      }
   }
   render() {
      return (
         <div className="profile-engineer-center">
            <div className="profile-engineer-theForm">
            <div className="profile-engineer-close">
               <Link to='/home'><img src={close} alt="Close"/></Link>
            </div>
            <div className="profile-engineer-left-side">
               <div className='profile-engineer-Foto'>
                  <div className="profile-engineer-img">
                     <img src={sample1} alt=""/>
                  </div>
                  <h2 className="profile-engineer-name">Sifa Noval</h2>
               </div>
               <div className='profile-engineer-desc'>
               <div className="profile-engineer-contact">
               <h3>Contact</h3>
                  <li>No: +6281327571327</li>
                  <li>Email: syifa@Gmailcom</li>
                  <li>Alamat: Bogor Timur</li>
               </div>
               <div className="profile-engineer-skill">
                  <h3>Skill</h3>
                  <li>Java Script</li>
                  <li>Python</li>
                  <li>C#</li>
               </div>
               </div>
            </div>
            <div className="profile-engineer-right-side">
               <div className="profile-engineer-about">
               <h3>About me</h3>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa tenetur veritatis soluta sint autem mollitia, ea cumque consequatur veniam quos dignissimos, nihil excepturi, cum assumenda magni ex dolor tempora ipsa?</p>
               </div>
               <div className="profile-engineer-hiri">
                  <div className="profile-engineer-hiri-button">
                     <button>HIRI ME</button>
                  </div>
               </div>
            </div>
            </div>
         </div>
      );
   }
}

export default ProfileEngineer;
