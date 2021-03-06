import React from "react";
import './scss/cards.scss';


const Cards = (props) => {

   const handleCLick = () => {
      const id = props.user
      props.getId(id);
   }

   return (
      <div className="card-container">
         <div className="box" >
            <img src={props.src} alt="" />
            <div className="box-content" onClick={handleCLick}>
               <h2 className="Name">{props.name}</h2>
               <h3 className="Job">Web Developer</h3>
               <div className="box-icon">
                  <div className="total-project">
                     <img src={require('./img/star.svg')} alt="" />
                     <p>80 Project</p>
                  </div>
                  <div className="succeses-project">
                     <img src={require('./img/success.svg')} alt="" />
                     <p>90% Ratting</p>
                  </div>
               </div>
               <div className="skill">
                  <p>Skill :</p>
               </div>
               <ul className="list-skill">
                  <p>{props.skill}</p>
               </ul>
               <div className="cards-detail">
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cards;
