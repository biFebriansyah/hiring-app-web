import React, { Component } from 'react'
import './scss/engineer.scss'

class Engineer extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        this.inputOnFocus = this.inputOnFocus.bind(this);
        this.inputOnBlur = this.inputOnBlur.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    onSave () {
        console.log('masuk')
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
            <div className="center-Engineer">
                <div className="theForm-Engineer">
                    <div className="theText-Engineer">
                        <h1>Input your data</h1>
                        <h3>Please input your profile</h3>
                    </div>
                    <div className="divForm-Engineer">
                        <div className="Engineer input-nama">
                            <input type="text" name="name" onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} />
                            <span data-placeholder="nama" />
                        </div>
                        <div className="Engineer input-location">
                            <input type="text" name="location" onFocus={this.inputOnFocus} onBlur={this.inputOnBlur} />
                            <span data-placeholder="your location" />
                        </div>
                        <div className="input-date">
                            <input type="date" name="date" />
                            <label htmlFor="date">your dob</label>
                        </div>
                        <div className="chooseFile">
                            <input type="file" />
                        </div>
                        <div className="button-Engineer">
                            <div className="daftar-Engineer">
                                <button type="submit" name="daftar" className="btnDaftar-Engineer" onClick={this.onSave}>Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Engineer