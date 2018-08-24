import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Gallery } from "./gallery.js";
import './App.css';
import './lightbox.js';
import registerServiceWorker from './registerServiceWorker';

class Welcomepage extends Component {
    render() {
        let renderGallery = this.props.renderGallery;
        return (
            <div>
                <div className="mainbody">
                    <div className="welcome-banner">
                        <img src={require("./welcomebanner.jpg")} />
                    </div>
                    <div className="home-image-container">

                        <img src={require("./cedarcoffeetable.jpg")} className="shadow" onClick={() => renderGallery()} height="400" width="400" />

                        <a>
                            <img src={require("./sugaroiuja.jpg")} className="shadow" height="400" width="400" />
                        </a>
                    </div>
                    <div className="text-container">
                        <div id="welcome-title">
                            <a>Lorem Ipsum</a>
                        </div>
                        <div id="welcome-copy">
                            <a>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </a>
                            <br />
                            <a>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </a>
                            <br />
                            <a>
                                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                                aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                            </a>
                        </div>
                    </div>
                    <div className="footer-strip">
                    </div>
                    <div className="footer">
                    </div>
                </div>
            </div>
        )
    }

}



class Mainpage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: Welcomepage
        }
        this.renderHome = this.renderHome.bind(this);
        this.renderGallery = this.renderGallery.bind(this);
    }

    renderHome() {
        this.setState({ display: Welcomepage });
    }

    renderGallery() {
        this.setState({ display: Gallery });
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
                            <a>Current Stock</a>
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
