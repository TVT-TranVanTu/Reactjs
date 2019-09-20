import React, { Component } from 'react';
import Body from './Body';
import Footer from './Footer';
import '../Style/baner.css';

class Banerright extends Component {
    render() {
        return (
            <div>
                <div className="col-lg-12">

                    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner" role="listbox">
                            <div className="carousel-item active">
                                <img className="d-block w-100" src="./image/ngaott.jpg" width="900px"  height="500px" alt="First slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="./image/cho1.jpg" width="900px" height="500px" alt="Second slide" />
                            </div>
                            <div className="carousel-item">
                                <img className="d-block w-100" src="./image/cho2.jpg" width="900px" height="500px" alt="Third slide" />
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                    <Body></Body>
                </div>
                 <Footer></Footer>

                </div>
        );
    }
}
export default Banerright;