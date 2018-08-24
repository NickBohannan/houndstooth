import React, { Component } from 'react'

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

export { Welcomepage }