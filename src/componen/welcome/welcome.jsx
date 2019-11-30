import { Link } from "react-router-dom";
import "./scss/welcome.scss";
import React, { Component } from "react";

export class Welcome extends Component {
   render() {
      return (
         <div>
            <div className="welcome-container">
               <div className="welcome-cover-layer">
                  <div className="welcome-nav">
                     <Link to='/login'>Sign in</Link>
                  </div>
                  <h2>HIRING PATNER</h2>
                  <div className="welcome-descript">
                     <p>
                        We here to <span>HELP</span> and <span>WORK</span> with yout
                     </p>
                  </div>
                  <Link className='welcome-register' to='/register'>Register Now</Link>
               </div>
            </div>
         </div>
           
      );
   }
}

export default Welcome;
