import React, {Component} from "react";
import {Redirect} from 'react-router-dom';
import './scss/header.scss';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         goHome: false,
         logout: false,
          data : []
      }
      this.goHome = this.goHome.bind(this);
      this.logout = this.logout.bind(this);
   }

   goHome (event) {
      this.setState({goHome: true})
      event.preventDefault()
   }

   logout () {
      localStorage.clear();
      this.setState({logout: true})
   }

   render(){
      if (this.state.goHome) {
         return <Redirect to={'/home'}/>;
      }
      if (this.state.logout) {
         return <Redirect to={'/login'}/>;
      }
      return (
         <div>
           <header>
              <div className="container-header-componen">
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
                    <div className="home-parent" onClick={this.goHome}>
                       <div className="text">
                          <h2>Home</h2>
                       </div>
                    </div>
                    <div className="account-parent">
                    <Link className='acount-link' to='/profile'>
                        <div className="logo-account">{this.props.dataUser.name.charAt(0)}</div>
                        <p>{this.props.dataUser.name}</p>
                    </Link>
                    </div>
                 </div>
                 <div className="msg-notif">
                    <span className="icon icon-chat"></span>
                    <span className="icon icon-notif"></span>
                    <Link className="logout" onClick={this.logout}>Logout</Link>
                 </div>
              </div>
           </header>
         </div>
      );
   }
};


const mapStateToProps = state => {
   return {
      dataUser: state.data.userData
   }
 }

export default connect(mapStateToProps)(Header);
