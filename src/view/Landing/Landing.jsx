import React, {Component} from 'react';
import {Redirect, Link} from 'react-router-dom';
import axios from 'axios';
import Cards from '../../components/Cards/Cards'
import './scss/landing.scss';
import { connect } from 'react-redux';
import {getUser} from '../../public/Redux/Actions/User';

class Landing extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         username : '',
         redir : false,
          data : [],
          dataUser: {}
      }
      this.handelDetail = this.handelDetail.bind(this);
      this.logout = this.logout.bind(this);
   }

   handelDetail (username) {
      this.setState({
         username: username,
         redir: true
      })
   }

   logout () {
      localStorage.removeItem('login');
      this.props.history.push('/login');
   }

   // async fetchData () {
   //    await this.props.dispatch(getUser('edozel28'))
   //    console.log(this.props)
   // }

   componentDidMount() {
      axios({
         method: 'get',
         url: 'http://localhost:4000/engineer',
         headers: {'Content-Type': 'application/json'}

      }).then(res => {
         let result = res.data.result[0];
         this.setState({
            data: result
         })
         console.log(this.props.dataUser)
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
                        <div className="logo-account">T</div>
                        <p>Telkom</p>
                    </Link>
                    </div>
                 </div>
                 <div className="msg-notif">
                    <span className="icon icon-chat"></span>
                    <span className="icon icon-notif"></span>
                    <Link to ="" className="logout" onClick={this.logout}>Logout</Link>
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
