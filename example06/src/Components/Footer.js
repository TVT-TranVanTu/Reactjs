import React, { Component } from 'react';
import '../Style/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube, faTwitter } from '@fortawesome/fontawesome-free-brands';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: " ",
            message:" ",
        };
    }

    handlechange = (event) => {
        this.setState({ 
            [event.target.name]:event.target.value,
        });
    }
    handlesubmit = (event) => {
        alert("your submit :" + this.state.email +", " +this.state.message);
        event.preventDefault();
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h1 className="logo-text"><span>Tra</span>vel ticket</h1>
                        <div className="contact">
                            <p>Chúng tôi luôn đem đến cho khách hàng sự trả nghiệm thú vị nhất .Có một lượng lớn khách hàng tin tưởng và đặt vé tại chúng tôi.</p>
                            <h4>Liên hệ chúng tôi:</h4>

                            <a>
                                <FontAwesomeIcon className="font-awesome" icon={faPhone}></FontAwesomeIcon> &nbsp;0396998025
                            </a>
                            <br />
                            <a>
                                <i className="fas fa-at"></i> &nbsp;Tvtdarkmoon@gmail.com
                            </a>
                            <br />
                            <a href="https://www.facebook.com/profile.php?id=100016702159249">
                                <FontAwesomeIcon className='font-awesome' icon={faFacebook} /> &nbsp;Trần Văn Tú
                            </a>
                            <br />
                        </div>
                        <div className="socials">
                            <a href="https://www.facebook.com/profile.php?id=100016702159249">
                                <FontAwesomeIcon className='font-awesome' icon={faFacebook} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100016702159249">
                                <FontAwesomeIcon className='font-awesome' icon={faInstagram} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100016702159249">
                                <FontAwesomeIcon className='font-awesome' icon={faYoutube} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100016702159249">
                                <FontAwesomeIcon className='font-awesome' icon={faTwitter} />
                            </a>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h1>Quick links</h1>
                        <br />
                        <ul>
                            <a href="#">
                                <li>Giới thiệu về travel tecket</li>
                            </a>
                            <a href="#">
                                <li>Tuyển dụng</li>
                            </a>
                            <a href="#">
                                <li>Điều khoản</li>
                            </a>
                            <a href="#">
                                <li>Chính sách bảo mật</li>
                            </a>
                            <a href="#">
                                <li>Hỗ trợ khách hàng</li>
                            </a>
                            <a href="#">
                                <li>Đánh giá</li>
                            </a>
                        </ul>
                    </div>
                    <div className="footer-section contact-form">
                        <h1>Contact us</h1>
                        <br />
                        <div className="row">
                            <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                                <div className="panel panel-primary">
                                    <div className="panel-body">

                                        <form onSubmit={this.handlesubmit}>
                                            <div className="form-group">
                                                <label>Email :</label>
                                                <input type="email" name="email" className="form-control" onChange={this.handlechange} id="" placeholder="Enter your email" />
                                            </div>

                                            <div className="form-group">
                                                <label>Message :</label>
                                                <input type="text" name="message" className="form-control" onChange={this.handlechange} id="" placeholder="Enter your messae" />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Submit</button>
                                            <button type="reset" className="btn btn-default">Reset</button>
                                        </form>

                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    coding | Designed by Trần Văn Tú &copy; My Website 2019
                </div>
            </div>

        );
    }
}
export default Footer;