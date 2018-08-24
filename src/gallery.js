import React, { Component } from 'react';
import { openModal, closeModal, plusSlides, currentSlide, showSlides } from './lightbox.js';

class Gallery extends Component {
    render() {
        return (
            <div>
                <div className="gallery-body">
                    <div className="gallery-logo">
                        <img src={require("./gallery.jpg")} />
                    </div>
                    <div className="gallery-container">
                        <div className="row">
                            <div className="column">
                                <img src={require("./gallery/030.jpg")} onClick={(event) => { openModal(); currentSlide(1) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/035.jpg")} onClick={(event) => { openModal(); currentSlide(2) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/036.jpg")} onClick={(event) => { openModal(); currentSlide(3) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/037.jpg")} onClick={(event) => { openModal(); currentSlide(4) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/039.jpg")} onClick={(event) => { openModal(); currentSlide(5) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/040.jpg")} onClick={(event) => { openModal(); currentSlide(6) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/040.jpg")} onClick={(event) => { openModal(); currentSlide(7) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/043.jpg")} onClick={(event) => { openModal(); currentSlide(8) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/052.jpg")} onClick={(event) => { openModal(); currentSlide(9) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/053.jpg")} onClick={(event) => { openModal(); currentSlide(10) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/barnrafterbencheatherseat.jpg")} onClick={(event) => { openModal(); currentSlide(11) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/barnraftersofatable.jpg")} onClick={(event) => { openModal(); currentSlide(12) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/barnraftersofatable2.jpg")} onClick={(event) => { openModal(); currentSlide(13) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/barnwoodbench.jpg")} onClick={(event) => { openModal(); currentSlide(14) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/barnwoodtable.jpg")} onClick={(event) => { openModal(); currentSlide(15) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/birdouija.jpg")} onClick={(event) => { openModal(); currentSlide(16) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/cedarcoffeetable.jpg")} onClick={(event) => { openModal(); currentSlide(17) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/cedarconsol.jpg")} onClick={(event) => { openModal(); currentSlide(18) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/cedarconsol2.jpg")} onClick={(event) => { openModal(); currentSlide(19) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/constelationswings.jpg")} onClick={(event) => { openModal(); currentSlide(20) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/customwallhanging.jpg")} onClick={(event) => { openModal(); currentSlide(21) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/customwallhanging2.jpg")} onClick={(event) => { openModal(); currentSlide(22) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/leatherflooring.jpg")} onClick={(event) => { openModal(); currentSlide(23) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/leatherflooring2.jpg")} onClick={(event) => { openModal(); currentSlide(24) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/mapleleather.jpg")} onClick={(event) => { openModal(); currentSlide(25) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/ouija1.jpg")} onClick={(event) => { openModal(); currentSlide(26) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/pianotable.jpg")} onClick={(event) => { openModal(); currentSlide(27) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/pianotable2.jpg")} onClick={(event) => { openModal(); currentSlide(28) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/planters.jpg")} onClick={(event) => { openModal(); currentSlide(29) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/stickchairs.jpg")} onClick={(event) => { openModal(); currentSlide(30) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/sugaroiuja.jpg")} onClick={(event) => { openModal(); currentSlide(31) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/walllampcherrywalnut.jpg")} onClick={(event) => { openModal(); currentSlide(32) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/walnutbench.jpg")} onClick={(event) => { openModal(); currentSlide(33) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/walnutbench2.jpg")} onClick={(event) => { openModal(); currentSlide(34) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/wanutbench3.jpg")} onClick={(event) => { openModal(); currentSlide(35) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/winecratediningtable.jpg")} onClick={(event) => { openModal(); currentSlide(36) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/winecratediningtable2.jpg")} onClick={(event) => { openModal(); currentSlide(37) }} className="hover-shadow" />
                            </div>
                            <div className="column">
                                <img src={require("./gallery/winecratediningtable3.jpg")} onClick={(event) => { openModal(); currentSlide(38) }} className="hover-shadow" />
                            </div>

                        </div>
                    </div>
                    <div className="footer-strip">
                    </div>
                    <div className="footer">
                    </div>
                </div>
                <div id="myModal" className="modal">
                    <span className="close cursor" onClick={(event) => { closeModal() }}>&times;</span>
                    <div className="modal-content">

                        <div className="mySlides">
                            <div className="numbertext">1 / 38</div>
                            <img src={require("./gallery/030.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">2 / 38</div>
                            <img src={require("./gallery/035.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">3 / 38</div>
                            <img src={require("./gallery/036.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">4 / 38</div>
                            <img src={require("./gallery/037.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">5 / 38</div>
                            <img src={require("./gallery/039.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">6 / 38</div>
                            <img src={require("./gallery/040.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">7 / 38</div>
                            <img src={require("./gallery/040.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">8 / 38</div>
                            <img src={require("./gallery/043.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">9 / 38</div>
                            <img src={require("./gallery/052.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">10 / 38</div>
                            <img src={require("./gallery/053.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">11 / 38</div>
                            <img src={require("./gallery/barnrafterbencheatherseat.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">12 / 38</div>
                            <img src={require("./gallery/barnraftersofatable.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">13 / 38</div>
                            <img src={require("./gallery/barnraftersofatable2.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">14 / 38</div>
                            <img src={require("./gallery/barnwoodbench.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">15 / 38</div>
                            <img src={require("./gallery/barnwoodtable.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">16 / 38</div>
                            <img src={require("./gallery/birdouija.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">17 / 38</div>
                            <img src={require("./gallery/cedarcoffeetable.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">18 / 38</div>
                            <img src={require("./gallery/cedarconsol.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">19 / 38</div>
                            <img src={require("./gallery/cedarconsol2.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">20 / 38</div>
                            <img src={require("./gallery/constelationswings.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">21 / 38</div>
                            <img src={require("./gallery/customwallhanging.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">22 / 38</div>
                            <img src={require("./gallery/customwallhanging2.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">23 / 38</div>
                            <img src={require("./gallery/leatherflooring.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">24 / 38</div>
                            <img src={require("./gallery/leatherflooring2.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">25 / 38</div>
                            <img src={require("./gallery/mapleleather.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">26 / 38</div>
                            <img src={require("./gallery/ouija1.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">27 / 38</div>
                            <img src={require("./gallery/pianotable.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">28 / 38</div>
                            <img src={require("./gallery/pianotable2.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">29 / 38</div>
                            <img src={require("./gallery/planters.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">30 / 38</div>
                            <img src={require("./gallery/stickchairs.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">31 / 38</div>
                            <img src={require("./gallery/sugaroiuja.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">32 / 38</div>
                            <img src={require("./gallery/walllampcherrywalnut.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">33 / 38</div>
                            <img src={require("./gallery/walnutbench.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">34 / 38</div>
                            <img src={require("./gallery/walnutbench2.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">35 / 38</div>
                            <img src={require("./gallery/wanutbench3.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">36 / 38</div>
                            <img src={require("./gallery/winecratediningtable.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">37 / 38</div>
                            <img src={require("./gallery/winecratediningtable2.jpg")} />
                        </div>

                        <div className="mySlides">
                            <div className="numbertext">38 / 38</div>
                            <img src={require("./gallery/winecratediningtable3.jpg")} />
                        </div>

                        <a className="prev" onClick={(event) => { plusSlides(-1) }}>&#10094;</a>
                        <a className="next" onClick={(event) => { plusSlides(1) }}>&#10095;</a>
                    </div>
                </div>
            </div>
        )
    }
}

export { Gallery };