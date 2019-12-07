import React, { Component } from "react";
import "./scss/RegisterCompany.scss";
import heroImg from "./img/sample2.jpg";
import axios from 'axios';
import FormData from 'form-data';

class Company extends Component {
   constructor(props) {
      super(props);

      this.state = {
         files: null,
         imgSrc: heroImg,
         userData: {
            username: this.props.match.params.username,
            name: '',
            telp: '',
            location: '',
         }
      };

      this.onSave = this.onSave.bind(this);
      this.handleFile = this.handleFile.bind(this);
      this.inputFile = React.createRef();
      this.inputChange = this.inputChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.userFrom = new FormData();
   }

   inputChange(event) {
      const file = event.target.files[0];
      if (file) {
         this.setState({ files: file });
         let reader = new FileReader();

         reader.onload = () => {
            this.setState({
               imgSrc: reader.result
            });
         };
         reader.readAsDataURL(file);
      }
      event.preventDefault();
   }

   setData () {
      this.userFrom.append('username', this.state.userData.username);
      this.userFrom.append('name', this.state.userData.name);
      this.userFrom.append('telp', this.state.userData.telp);
      this.userFrom.append('location', this.state.userData.location);
      this.userFrom.append('photo', this.state.files);
   }

   handleChange(event) {
        let userData = {...this.state.userData};
        let inputName = event.target.name;
        let inputValue = event.target.value;
        if (inputName === 'skill') {
            if (event.target.checked) {
                let skilList = inputValue + ", " +userData[inputName]
                console.log(skilList)
                userData[inputName] = skilList
            }
        } else {
            userData[inputName] = inputValue;
        }
        this.setState({
            userData: userData
        }, () => {
            console.log(this.state.userData)
        })
   }

   onSave(event) {

      this.setData();
      axios({
         method: 'post',
         url: 'http://localhost:4000/company',
         headers: {'content-type': 'multipart/form-data'},
         data: this.userFrom
      }).then(res => {
         this.props.history.push('/login');
      }).catch(err => {
         if (err.response) {
            alert(err.response.data.result[0]);
            console.log(err.response.data.result[0])
            return
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

   handleFile(event) {
      this.inputFile.current.click();
      event.preventDefault();
   }

   render() {
      return (
         <div className="Engineer-container">
            <div className="Engineer-login-from">
               <div className="inpFoto">
                  <input type="file" name="photo" ref={this.inputFile} onChange={this.inputChange} />
                  <button className="btn-choose" onClick={this.handleFile}>Choose Logo</button>
               </div>
               <div className="Engineer-img-container">
                  <img src={this.state.imgSrc} alt="hero-img" ref={this.img} />
               </div>
               <div className="Engineer-input-container">
                  <div className="Engineer-text-explain">
                     <h2>Input data Company</h2>
                     <h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h3>
                  </div>
                  <div className="Engineer-input-name Engineer-putin">
                     <input type="text" name="name" placeholder="Company name" onChange={this.handleChange} />
                  </div>
                  <div className="Engineer-input-name Engineer-putin">
                     <input type="text" name="telp" placeholder="No. Telp" onChange={this.handleChange} />
                  </div>
                  <div className="Engineer-input-name Engineer-putin">
                     <input type="text" name="location" placeholder="location" onChange={this.handleChange} />
                  </div>
                  <div className="Engineer-btn-save companyBtn">
                     <button onClick={this.onSave}>Save</button>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default Company;
