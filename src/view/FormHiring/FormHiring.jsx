import React, { Component } from 'react'
import Headers from '../../components/Header/Header';
import style from './scss/FormHiring.module.scss';

export class FormHiring extends Component {
    render() {
        return (
            <div className={style.container} >
            <Headers></Headers>
            <div className={style.center} >
                <div className={style.projectContainer}>
                    <h1>set Project to Hire</h1>
                    <input type="text" onChange = {this.inputHandle} className={`${style.bayar} ${style.input}`} name="salary" placeholder="set bayar" />
                    <textarea name="description" onChange = {this.inputHandle} id="desc" cols="30" rows="10" className={`${style.desc}`} placeholder="set desc" ></textarea>
                    <button className={`${style.buttonSave}`} onClick ={this.submiting}>Send</button>
                </div>
            </div>
            </div>
        )
    }
}

export default FormHiring
