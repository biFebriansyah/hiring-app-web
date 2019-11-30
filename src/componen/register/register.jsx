import React, { Component,  } from "react";
import {Link, Redirect} from 'react-router-dom'
import axios from 'axios';
import "./scss/register.scss";

class Regiester extends Component {
   constructor(props) {
      super(props)
   
      this.state = {
         login: false,
         value: 1,
         formData: {
            name: '',
            username : '',
            email: '',
            role: 1,
            password: ''
         }
      }
      this.onsubmit = this.onsubmit.bind(this);
      this.OneEffect = this.OneEffect.bind(this);
      this.OfEffect = this.OfEffect.bind(this);
      this.onFormChange = this.onFormChange.bind(this);
      this.errors = this.errors.bind(this);
   }

   async onsubmit(event) {

      axios({
         method: 'post',
         url: 'http://localhost:4000/register',
         headers: {'Content-Type': 'application/json'},
         data: this.state.formData
      }).then(res => {
         console.log(res.data.result[0])
         this.setState({
            login: true
         })
      }).catch(err => {
         if (err.response) {
            return console.log(err.response.data.result[0])
         }
         if (err.request) {
            return console.log('error from request', err.request);
         }
         else {
            console.log('unknown error')
         }
      })

      event.preventDefault()
   }

   errors (err) {
      if (err.response) {
         console.log('error from response', err.response.status)
      }
      if (err.request) {
         console.log('error from request', err.request);
      }
      else {
         console.log('unknown error')
      }
   }
   OneEffect(event) {
      event.target.classList.add('spanChange')
   }

   OfEffect(event) {
      if (event.target.value === "") {
         event.target.classList.remove('spanChange')
      }
   }

   onFormChange (event) {
      let dataForm = {...this.state.formData};
      dataForm[event.target.name] = event.target.value;
      this.setState({
         formData: dataForm
      },() => {
         console.log(this.state.formData);
      })
   }

   render() {
      if (this.state.login) {
         return <Redirect to={'/login'} />;
      }
      return (
         <div className="center">
            <div className="theForm">
               <div className="theText">
                  <h1>Register System</h1>
                  <h3>Create your account to login</h3>
               </div>
               <form>
                  <div className="nama">
                     <div className="theInput">
                        <input
                           ref="inputFirst"
                           className="inputDepan"
                           type="text"
                           name="name"
                           autoComplete="off"
                           placeholder="First name"
                           onFocus={this.OneEffect}
                           onBlur={this.OfEffect}
                           onChange={this.onFormChange}
                        />
                        {/* <span>
                           <label htmlFor="namaDepan">Nama depan</label>
                        </span> */}
                        <p className="alret alretDepan">Tidak boleh Kosong</p>
                     </div>
                  </div>
                  <div className="theInput inputUsername">
                     <input className="inputUser" type="text" onChange={this.onFormChange} name="username" autoComplete="off" ref="inputUsername" placeholder="Username" onFocus={this.OneEffect}
                           onBlur={this.OfEffect}/>
                     {/* <span>
                        <label htmlFor="namaName">Username</label>
                     </span> */}
                     <p className="userInfo"> Use the unik username, add number or symbol</p>
                     <p className="alret alretUser">Tidak boleh Kosong</p>
                  </div>
                  <div className="theInput inputEmailCon">
                     <input className="inputEmail" type="email" onChange={this.onFormChange} name="email" autoComplete="off" ref="inputEmail" placeholder="Email" onFocus={this.OneEffect}
                           onBlur={this.OfEffect} />
                     {/* <span>
                        <label htmlFor="email">Email</label>
                     </span> */}
                     <p className="alret alretUser">Tidak boleh Kosong</p>
                  </div>
                  <div className="custom-select">
                     <select onChange={this.onFormChange} name='role'>
                        <option value={this.state.value} disabled>
                           Who you Are?:
                        </option>
                        <option value="1">Compnay</option>
                        <option value="2">Engineer</option>
                     </select>
                  </div>
                  <div className="password">
                     <div className="theInput">
                        <input
                           ref="inputPass"
                           className="inputPass"
                           type="password"
                           name="password"
                           autoComplete="off"
                           placeholder="Password"
                           onFocus={this.OneEffect}
                           onBlur={this.OfEffect}
                           onChange={this.onFormChange}
                        />
                        {/* <span>
                           <label htmlFor="password1">Password</label>
                        </span> */}
                        <p className="alret alretPass">Tidak boleh Kosong</p>
                     </div>
                     <div className="theInput">
                        <input
                           className="inputConfirm"
                           ref="inputPassConfirm"
                           type="password"
                           name="confirm"
                           autoComplete="off"
                           placeholder="Confirm"
                           onFocus={this.OneEffect}
                           onBlur={this.OfEffect}
                           onChange={this.onFormChange}
                        />
                        {/* <span>
                           <label htmlFor="password2">Confirm</label>
                        </span> */}
                        <p className="alretConf">Password tidak sama</p>
                     </div>
                  </div>
                  <p className="passInfo">Pass word must be 8 char or more</p>
                  <div className="button">
                     <div className="daftar">
                        <button name="daftar" onClick={this.onsubmit} className="btnDaftar" >
                           Daftar
                        </button>
                     </div>
                     <div className="masuk">
                        <Link to='/login'>Login here</Link>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      );
   }
}

export default Regiester;
