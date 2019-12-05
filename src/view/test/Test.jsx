import React, { Component } from 'react'
import './style.scss'
import heroImg from "./img/alaska.jpg";

class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            imgSrc: heroImg,
        }
    }

    render() {
        return (
           <div>
               {/* <header>
              <div className="container-header">
                 <div className="img-header">
                    <img src={require('./img/logo.png')} alt="arkademy logo" />
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
                          <h2>Home</h2>
                       </div>
                    </div>
                    <div className="account-parent">
                    <Link className='acount-link' to='/profile'>
                        <div className="logo-account">T</div>
                        <p>Telkom</p>
                    </Link>
                    </div>
                 </div>
                 <div className="msg-notif">
                    <span className="icon icon-chat"></span>
                    <span className="icon icon-notif"></span>
                    <Link className="logout" onClick={this.logout}>Logout</Link>
                 </div>
              </div>
           </header> */}
         </div>
        )
    }
}

export default Test

