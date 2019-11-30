import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Cards from '../../components/Cards/Cards'
import './scss/landing.scss';

class Landing extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
          data : []
      }
      
      this.handelDetail = this.handelDetail.bind(this);
   }

   handelDetail (id) {
      console.log(id)
   }

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
      }).catch(err => {
         if (err.response) {
            return console.log(err.response.data)
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
        return (
           <div>
           <header>
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
                    {/* <div className="home-parent">
                       <div className="text">
                          <h2>Home</h2>
                       </div>
                    </div> */}
                    <div className="account-parent">
                    <Link className='acount-link' to='/profile'>
                           <div className="logo-account">T</div>
                          <h2>Telkom</h2>
                    </Link>
                    </div>
                 </div>
                 <div className="garis-dot">
                    <span className="garis icon-garis"></span>
                 </div>
                 <div className="msg-notif">
                    <span className="icon icon-chat"></span>
                    <span className="icon icon-notif"></span>
                    <span className="icon icon-dott"></span>
                 </div>
              </div>
           </header>
           <div className="card-componen">
           {
              this.state.data.map(post => {

                 return <Cards key={post.id} src={post.photo} name={post.name} />
                 
              })
           }
            </div>
           </div>
        );
     }
}

export default Landing