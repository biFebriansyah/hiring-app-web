import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
import Cards from '../../components/Cards/Cards'
import './scss/landing.scss';
import { connect } from 'react-redux';

class Landing extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         profile: '',
         username : '',
         redir : false,
          data : [],
          dataUser: {}
      }
      this.handelDetail = this.handelDetail.bind(this);
      this.logout = this.logout.bind(this);
      this.setProfile = this.setProfile.bind(this);
   }

   handelDetail (username) {
      this.setState({
         username: username,
         redir: true
      })
   }

   logout () {
      localStorage.clear();
      this.props.history.push('/login');
   }

   setProfile () {

      if (!this.props.dataUser.dob) {
         this.setState({profile: '/profilec/'})
      } else {
         this.setState({profile: '/profile/'})
      }
   }
   
   componentDidMount() {
      axios({
         method: 'get',
         url: 'http://54.146.201.237:4000/engineer',
         headers: {'Content-Type': 'application/json'}

      }).then(res => {
         let result = res.data.result[0];
         this.setState({
            data: result
         })
         this.setProfile();

      }).catch(err => {
         if (err.response) {
            return console.log(err.response.data.result[0])
         }
         if (err.request) {
            return console.log('error from request', err.request);
         }
         else {
            console.log(err)
         }
      })
   }
   
    render() {
       if (this.state.redir) {
          return <Redirect to={`/Detail/${this.state.username}`} />;
       }
       if (!this.props.dataUser) {
         return <Redirect to={'/login'} />;
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
                    <Link className='acount-link' to={this.state.profile + this.props.dataUser.username}>
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
           <div className="card-componen">
           {
              this.state.data.map(post => {

                 return <Cards key={post.id} src={post.photo} name={post.name} user={post.username} getId ={this.handelDetail} skill={post.skill} />
              })
           }
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

export default connect (mapStateToProps)(Landing)
