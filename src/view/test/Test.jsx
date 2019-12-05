import React, { Component } from 'react'
import './style.scss'
import heroImg from "./img/hero.jpeg";
import logo from './img/Arkademy Putih.svg';

class Test extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            imgSrc: heroImg,
        }
        this.inputOnFocus = this.inputOnFocus.bind(this);
        this.inputOnBlur = this.inputOnBlur.bind(this);
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
        return (
            <div className="Engineer-container">
            <div className="Engineer-login-from">
               <div className="Engineer-img-container">
                  <div className="register-section">
                     <div className="logo-putih">
                        <img src={logo} alt="" className='logo-regis'/>
                     </div>
                     <h3>Join with us for new Journey</h3>
                  </div>
                  <img src={this.state.imgSrc} alt="hero-img" ref={this.img} />
               </div>
               <div className="Engineer-input-container">
                  <div className="Engineer-text-explain">
                     <h2>Register Form</h2>
                     <h3>data in this form will be use to login</h3>
                  </div>
                  <div className="register-input">
                    <div className="register-inp">
                        <input type="text" onChange={this.onChangeInput} name="username" ref='inputUser' autoComplete="off" onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} className={this.state.classUser}/>
                        <span data-placeholder="Username" />
                    </div>
                    <div className="register-inp">
                        <input type="email" onChange={this.onChangeInput} name="email" ref='inputUser' autoComplete="off" onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} className={this.state.classUser}/>
                        <span data-placeholder="email" />
                    </div>
                    <div className="register-inp">
                        <input type="password" onChange={this.onChangeInput} name="password" ref='inputUser' autoComplete="off" onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} className={this.state.classUser}/>
                        <span data-placeholder="password" />
                    </div>
                    <div className="register-custom-select">
                     <select onChange={this.onFormChange} name='role'>
                        <option value={this.state.value} disabled>
                           Who you Are?:
                        </option>
                        <option value="1">Compnay</option>
                        <option value="2">Engineer</option>
                     </select>
                  </div>
                  </div>
                  <div className="Engineer-btn-save">
                     <button onClick={this.onSave}>Next</button>
                  </div>
               </div>
            </div>
         </div>
        )
    }
}

export default Test

