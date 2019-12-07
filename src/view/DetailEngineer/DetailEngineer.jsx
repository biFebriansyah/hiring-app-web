import React, { Component } from 'react'
import axios from 'axios';
import './scss/DetailEngineer.scss';
import heroImg from "./img/alaska.jpg";
import logo from './img/Arkademy Putih.svg';
import Headers from '../../components/Header/Header';


export class DetailEngineer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            username: this.props.match.params.username,
            imgSrc: heroImg,
            data: {}
        }
        this.hireMe = this.hireMe.bind(this);
    }

    hireMe(event){
      this.props.history.push('/hiring/'+this.state.username);
      event.preventDefault();
    }

    componentDidMount () {
      axios({
         method: 'get',
         url: 'http://localhost:4000/engineer/' + this.state.username,
         headers: {'Content-Type': 'application/json'},

      }).then(res => {
         let result = res.data.result[0][0];
         console.log(result);
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
           <Headers></Headers>
            <div className="Detail-container">
            <div className="Detail-login-from">
               <div className="Detail-img-container">
                  <div className="Detail-section">
                     <div className="logo-putih">
                        <img src={logo} alt="" className='logo-regis'/>
                     </div>
                  </div>
                  <img src={this.state.data.photo} alt="hero-img" ref={this.img} />
               </div>
               <div className="Detail-input-container name">
                  <div className="top">
                     <div className="Detail-engineer">
                        <h2>{this.state.data.name}</h2>
                     </div>
                     <div className="Detail-engineer rule">
                        <h3>Desktop Developer</h3>
                     </div>
                     <div className="Detail-engineer skil">
                        <h3>{this.state.data.skill}</h3>
                     </div>
                  </div>
                  {/* <div className="midle">
                     <div className="midle-first">
                        <div className="midle-age midle-content">
                           <h2>23</h2>
                           <p>Age</p>
                        </div>
                        <div className="midle-total midle-content">
                           <h2>80</h2>
                           <p>Total Project</p>
                        </div>
                     </div>
                     <div className="midle-second">
                        <div className="midle-finish midle-content">
                           <h2>40</h2>
                           <p>Project Finished</p>
                        </div>
                        <div className="midle-years midle-content">
                           <h2>2 Years</h2>
                           <p>Experience</p>
                        </div>
                     </div>
                  </div> */}
                  <div className="Detail-btn-save">
                     <button onClick={this.hireMe} >Hiri Me</button>
                  </div>
               </div>
            </div>
         </div>
         </div>
        )
    }
}

export default DetailEngineer
