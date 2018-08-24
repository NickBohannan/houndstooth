import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Welcomepage } from './welcome.js'
import { Gallery } from "./gallery.js";
import { Modify } from "./modify.js"
import './App.css';
import './lightbox.js';
import registerServiceWorker from './registerServiceWorker';



class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: Welcomepage
        }
        this.renderHome = this.renderHome.bind(this);
        this.renderGallery = this.renderGallery.bind(this);
        this.renderModify = this.renderModify.bind(this);
    }

    renderHome() {
        this.setState({ display: Welcomepage });
    }

    renderGallery() {
        this.setState({ display: Gallery });
    }

    renderModify() {
        this.setState({ display: Modify });
    }

    render() {
        return (
            <div>
                <div id="welcomeimage">
                    <img src={require('./erichomeimagewfont.jpg')} alt="houndstooth" />
                </div>
                <div className="navbar">
                    <div className="link-container">
                        <div id="navhome">
                            <a onClick={this.renderHome}>Home</a>
                        </div>
                        <div id="navgallery">
                            <a onClick={this.renderGallery}>Gallery</a>
                        </div>
                        <div id="navstock">
                            <a onClick={this.renderModify}>Current Stock</a>
                        </div>
                        <div id="navcustom">
                            <a>Custom Orders & Contact</a>
                        </div>
                    </div>
                </div>
                <this.state.display renderGallery={this.renderGallery} />
            </div >
        );
    }
}

ReactDOM.render(<Mainpage />, document.getElementById('root'));
registerServiceWorker();
