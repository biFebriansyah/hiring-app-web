import React, { Component } from 'react';
import style from './ProjectCompany.module.scss';
import axios from 'axios';

class ProjectCompany extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             dataForm: {
                 name: '',
                 time: '',
                 salary: '',
                 description: '',
                 username: 'PT XL Axiata Tbk'
             }
        }
        this.inputHandle = this.inputHandle.bind(this);
        this.submiting = this.submiting.bind(this);
    }

    inputHandle (event) {
        let input = {...this.state.dataForm};
        input[event.target.name] = event.target.value;
        this.setState({
            dataForm: input
        }, () => {
            console.log(this.state.dataForm)
        })
    }

    submiting (event) {
        axios({
            method: 'post',
            url: 'http://localhost:4000/project',
            headers: {'Content-Type': 'application/json'},
            data: this.state.dataForm
         }).then(res => {
            console.log(res.data.result[0])
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
        event.preventDefault();
    }
    
    render() {
        return (
            <div className={style.container} >
            <div className={style.center} >
                <div className={style.projectContainer}>
                    <h1>Project Company</h1>
                    <input type="text" onChange = {this.inputHandle} placeholder="Name Project" name="name" className={`${style.name} ${style.input}`} />
                    <input type="text" onChange = {this.inputHandle} className={`${style.waktu} ${style.input}`} name="time" placeholder="set deadline" />
                    <input type="text" onChange = {this.inputHandle} className={`${style.bayar} ${style.input}`} name="salary" placeholder="set bayar" />
                    <textarea name="description" onChange = {this.inputHandle} id="desc" cols="30" rows="10" className={`${style.desc}`} placeholder="set desc" ></textarea>
                    <button className={`${style.buttonSave}`} onClick ={this.submiting}>Save</button>
                </div>
            </div>
            </div>
        )
    }
}

export default ProjectCompany

