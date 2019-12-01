import React, { Component } from 'react';
import './scss/engineer.scss';
import heroImg from './img/sample2.jpg';


class Engineer extends Component {

    constructor(props) {
        super(props)

        this.state = {
            files: null,
            imgSrc: heroImg
        }

        this.onSave = this.onSave.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.inputFile = React.createRef();
        this.inputChange = this.inputChange.bind(this);
    }

    inputChange (event) {

        const file = event.target.files[0];

        if (file) {

            let reader = new FileReader()

            reader.onload = () => {

                this.setState({
                    files: file,
                    imgSrc: reader.result
                })
            }
            reader.readAsDataURL(file);
        }

        event.preventDefault();
    }

    onSave(event) {

        console.log("Files: ", this.state.files);
        console.log("src: ", this.state.imgSrc);
        event.preventDefault()
    }

    handleFile (event) {

        this.inputFile.current.click();

        event.preventDefault()
    }

    render() {
        return (
            <div className="Engineer-container">
                <div className="Engineer-login-from">
                    <div className="inpFoto">
                        <input type="file" name="Photot" ref={this.inputFile} onChange={this.inputChange}/>
                        <button className="btn-choose" onClick={this.handleFile}>Choose Photo</button>
                    </div>
                    <div className="Engineer-img-container">
                        <img src={this.state.imgSrc} alt="hero-img" ref={this.img}/>
                    </div>
                    <div className="Engineer-input-container">
                        <div className="Engineer-text-explain">
                            <h2>Input your data</h2>
                            <h3>Pleace input youre ture data</h3>
                        </div>
                        <div className="Engineer-input-name Engineer-putin">
                            <input type="text" name="name" placeholder="youre name"/>
                        </div>
                        <div className="Engineer-inputDob Engineer-putin">
                            <input type="date" />
                        </div>
                        <div className="Engineer-inputSkil Engineer-putin">
                            <div className="Engineer-skilinput">
                                <input type="checkbox" name="skill" defaultValue="java script" />
                                <p>Java Script</p>
                            </div>
                            <div className="Engineer-skilinput">
                                <input type="checkbox" name="skill" defaultValue="php" />
                                <p>Php</p>
                            </div>
                            <div className="Engineer-skilinput">
                                <input type="checkbox" name="skill" defaultValue="css" />
                                <p>Css</p>
                            </div>
                            <div className="Engineer-skilinput">
                                <input type="checkbox" name="skill" defaultValue="python" />
                                <p>Python</p>
                            </div>
                            <div className="Engineer-skilinput">
                                <input type="checkbox" name="skill" defaultValue="ruby" />
                                <p>Ruby</p>
                            </div>
                        </div>
                        <div className="Engineer-description Engineer-putin">
                            <textarea
                                placeholder=" Youre Description here"
                                cols={60}
                                rows={8}
                                defaultValue={this.state.textarea}
                            />
                        </div>
                        <div className="Engineer-putin git">
                            <input
                                type="text"
                                name="name"
                                className="Engineer-git-input"
                                placeholder="https://github.com/biFebriansyah/"
                            />
                        </div>
                        <div className="Engineer-btn-save">
                            <button onClick={this.onSave}>next</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Engineer
