import React, { Component } from "react";
import {Link, Redirect} from 'react-router-dom';
import "./login.scss";
import axios from 'axios'
import auth from '../../auth/auth'

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
           login : false,
           users : {
              username : '',
              password : ''
           }
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.inputOnFocus = this.inputOnFocus.bind(this);
        this.inputOnBlur = this.inputOnBlur.bind(this);
        this.login = this.login.bind(this);
    }

    login(event) {

      axios({
         method: 'post',
         url: 'http://localhost:4000/login',
         headers: {'Content-Type': 'application/json'},
         data: this.state.users

      }).then(res => {
         const result = res.data.result[0]
         console.log(result)
         auth.loginAuth(() => {
            this.setState({login: true})
         })

      }).catch(err => {
         if (err.response) {
            const result = err.response.data.result
            return console.log(result[0])
         }
         if (err.request) {
            return console.log(err.request)
         }
         else {
            return console.log(err)
         }
      })

      event.preventDefault()
    }

    onChangeInput(event) {
        event.preventDefault()

        const data = {...this.state.users};
        data[event.target.name] = event.target.value;
        this.setState({
           users : data
        }, ()=> {console.log(this.state.users)})
    }

    inputOnFocus(event) {
       event.target.classList.add('focus');
    }
    inputOnBlur(event) {
       if (event.target.value === "") {
          event.target.classList.remove('focus');
       }
    }

   render() {

      if (this.state.login) {
         return <Redirect to={'/home'} />
      }
      return (
         <div className="container">
            <form className="login-from">
               <h1>Login Form</h1>
               <div className="inpform">
                  <input type="text" onChange={this.onChangeInput} name="username" ref='inputUser' autoComplete="off" onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} className={this.state.classUser}/>
                  <span data-placeholder="Username" />
               </div>
               <div className="inpform">
                  <input type="password" onChange={this.onChangeInput} name="password" ref='inputPass' autoComplete="off" onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} />
                  <span data-placeholder="Password" />
               </div>
               <input type="submit" className="login-btn" defaultValue="Login" onClick={this.login}/>
               <div className="botom-txt">
                  <p>
                     Don't have account? <Link to='/register'> Sign up! </Link>
                  </p>
               </div>
            </form>
         </div>
      );
   }
}

export default Login;
