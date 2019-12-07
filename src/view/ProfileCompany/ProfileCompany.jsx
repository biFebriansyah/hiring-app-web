import React, { Component } from 'react';
import './sass/ProfileCompany.scss';
import Header from '../../components/Header/Header';
import {connect} from 'react-redux'

class ProfileCompany extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick (event) {
      this.props.history.push('/create/'+this.props.dataUser.username);
      event.preventDefault();
    }
    
    render() {
        return (
            <div className="profile-container">
            <Header></Header>
            <div className="profile-conten">
              <div className="content-top">
                <div className="logo">
                  <img src={this.props.dataUser.logo} alt="" />
                </div>
                <div className="profile-des">
                  <h2>{this.props.dataUser.name}</h2>
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, necessitatibus doloremque tenetur dolor adipisci incidunt ea, accusamus, voluptas quod quasi eveniet quo delectus. Nobis cupiditate possimus nulla debitis recusandae nisi.</p>
                  <button onClick={this.handleClick}>Create Project</button>
                </div>
              </div>
              {/* <div className="profile-detail">
                <div className="contact">
                  <div className="location boxStyle">
                    <p>Location here</p>
                  </div>
                  <div className="email boxStyle">
                    <p>Email@here</p>
                  </div>
                  <div className="phone boxStyle">
                    <p>081-080-123</p>
                  </div>
                </div>
                <div className="project-list">
                  <h3>Youre Project</h3>
                  <div className="list-style">
                    <p>Database User</p>
                    <p className="status">waiting</p>
                  </div>
                  <div className="list-style">
                    <p>Design new Ui</p>
                    <p className="status">Approved</p>
                  </div>
                  <div className="list-style">
                    <p>Security Design</p>
                    <p className="status">rejected</p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        )
    }
}

const mapStateToProps = state => {
  return {
     dataUser: state.data.userData
  }
}

export default connect(mapStateToProps)(ProfileCompany)
