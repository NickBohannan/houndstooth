import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Welcomepage } from './welcome.js'
import { Gallery } from "./gallery.js";
import { Modify } from "./modify.js"
import { Contact } from './contact.js'
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
        this.renderContact = this.renderContact.bind(this);
    }

    renderHome() {
        this.setState({ display: Welcomepage });
    }

    renderGallery() {
        this.setState({ display: Gallery });
    }

    renderContact() {
        this.setState({ display: Contact })
    }

    facebookLink() {
        window.open("https://www.facebook.com/houndstoothwoodwerk", "_blank");
    }

    etsyLink() {
        window.open("https://www.etsy.com", "_blank");
    }

    render() {
        return (
            <div>
                <div id="welcomeimage">
                    <img src={require('./erichomeimagewfont.jpg')} alt="houndstooth" onClick={this.renderHome} />
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
                            <a onClick={this.etsyLink}>Current Stock on Etsy</a>
                        </div>
                        <div id="navcustom">
                            <a onClick={this.renderContact}>Custom Orders & Contact</a>
                        </div>
                        <div id="facebook-link">
                            <img src={require("./facebook.png")} onClick={this.facebookLink} />
                        </div>
                    </div>
                </div>
                <this.state.display renderGallery={this.renderGallery} renderModify={this.renderModify} renderContact={this.renderContact} />
            </div >
        );
    }
}

ReactDOM.render(<Mainpage />, document.getElementById('root'));
registerServiceWorker();
