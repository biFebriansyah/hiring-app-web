import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import axios from "axios";
import "./scss/register.scss";
import heroImg from "./img/hero.jpeg";
import logo from './img/Arkademy Putih.svg';

class Regiester extends Component {
   constructor(props) {
      super(props);

      this.state = {
         login: false,
         value: "Who you are?",
         imgSrc: heroImg,
         formData: {
            username: "",
            email: "",
            role: 1,
            password: ""
         }
      };
      this.onsubmit = this.onsubmit.bind(this);
      this.inputOnFocus = this.inputOnFocus.bind(this);
      this.inputOnBlur = this.inputOnBlur.bind(this);
      this.onFormChange = this.onFormChange.bind(this);
   }

   async onsubmit(event) {
      axios({
         method: "post",
         url: "http://localhost:4000/register",
         headers: { "Content-Type": "application/json" },
         data: this.state.formData
      })
         .then(res => {
            this.props.history.push("/engineer/" + this.state.formData.username);
         })
         .catch(err => {
            if (err.response) {
               return console.log(err.response.data.result[0]);
            }
            if (err.request) {
               return console.log("error from request", err.request);
            } else {
               console.log("unknown error");
            }
         });

      event.preventDefault();
   }

   inputOnFocus(event) {
      event.target.classList.add('focus');
   }
   inputOnBlur(event) {
      if (event.target.value === "") {
         event.target.classList.remove('focus');
      }
   }

   onFormChange(event) {
      let dataForm = { ...this.state.formData };
      dataForm[event.target.name] = event.target.value;
      this.setState(
         {
            formData: dataForm
         },
         () => {
            console.log(this.state.formData);
         }
      );
   }

   render() {
      if (this.state.login) {
         return <Redirect to={"/login"} />;
      }
      return (
         <div className="Register-container">
            <div className="Register-login-from">
               <div className="Register-img-container">
                  <div className="register-section">
                     <div className="logo-putih">
                        <img src={logo} alt="" className="logo-regis" />
                     </div>
                     <h3>Join with us for new Journey</h3>
                  </div>
                  <img src={this.state.imgSrc} alt="hero-img" ref={this.img} />
               </div>
               <div className="Register-input-container">
                  <div className="Register-text-explain">
                     <h2>Register Form</h2>
                     <h3>data in this form will be use to login</h3>
                  </div>
                  <div className="register-input">
                     <div className="register-inp">
                        <input
                           type="text"
                           onChange={this.onFormChange}
                           name="username"
                           ref="inputUser"
                           autoComplete="off"
                           onFocus={this.inputOnFocus}
                           onBlur={this.inputOnBlur}
                           className={this.state.classUser}
                        />
                        <span data-placeholder="Username" />
                     </div>
                     <div className="register-inp">
                        <input
                           type="email"
                           onChange={this.onFormChange}
                           name="email"
                           ref="inputUser"
                           autoComplete="off"
                           onFocus={this.inputOnFocus}
                           onBlur={this.inputOnBlur}
                           className={this.state.classUser}
                        />
                        <span data-placeholder="email" />
                     </div>
                     <div className="register-inp">
                        <input
                           type="password"
                           onChange={this.onFormChange}
                           name="password"
                           ref="inputUser"
                           autoComplete="off"
                           onFocus={this.inputOnFocus}
                           onBlur={this.inputOnBlur}
                           className={this.state.classUser}
                        />
                        <span data-placeholder="password" />
                     </div>
                     <div className="register-custom-select">
                        <select onChange={this.onFormChange} name="role">
                           <option value="0" disabled selected>
                              {this.state.value}
                           </option>
                           <option value="1">Compnay</option>
                           <option value="2">Engineer</option>
                        </select>
                     </div>
                  </div>
                  <div className="Register-btn-save">
                     <button onClick={this.onsubmit}>Next</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Regiester;
