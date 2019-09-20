import React, { Component } from 'react';
import '../Style/SignUp.css';

class SignUp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            yourName: " ",
            Password: " ",
        };
    }

    handlechange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    handlesubmit = (event) => {
        alert("your submit :" + this.state.yourName + ", " + this.state.Password);
        event.preventDefault();
    }
    render() {
        return (

            <div className="container">


                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">

                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Sign Up</h3>
                            </div>
                            <div className="panel-body">

                                <form onSubmit={this.handlesubmit}>
                                    <div className="form-group">
                                        <label>Used Name :</label>
                                        <input type="text" name="yourName" className="form-control" onChange={this.handlechange}  placeholder="Enter your name" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email :</label>
                                        <input type="email" name="email" className="form-control" onChange={this.handlechange} placeholder="Enter your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password :</label>
                                        <input type="password" name="Password" className="form-control" onChange={this.handlechange} placeholder="Enter your passwword" />
                                    </div>
                                    <div className="form-group">
                                        <label>Enter the Password :</label>
                                        <input type="password" name="resetPassword" className="form-control" onChange={this.handlechange} placeholder="Enter the password" />
                                    </div>
                                    <div className="form-group">
                                        <label>Address :</label>
                                        <input type="text" className="form-control"
                                         placeholder="Apartment, studio, or floor" />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-sm-6">
                                            <label>City :</label>
                                            <input type="text" id="city" className="form-control"/>
                                        </div>
                                        <div className="form-group col-sm-4">
                                            <label>State :</label>
                                            <input type="text" className="form-control" />
                                        </div>
                                        <div className="form-group col-sm-2">
                                        <label>Zip :</label>
                                            <input type="text" className="form-control" />
                                        </div>


                                    </div>
                                    <div className="form-group">

                                        <input name="gioitinh" type="radio" value="Nam" /><b>Nam</b>
                                        <input name="gioitinh" type="radio" value="Nữ" /><b>Nữ</b>
                                        <input name="gioitinh" type="radio" value="Khác" /><b>Khác</b>
                                   </div>

                                    <button type="submit" className="btn btn-primary">Submit</button>
                                    <button type="reset" className="btn btn-waiting">Reset</button>
                                </form>

                            </div>
                        </div>


                    </div>
                </div>
            </div>

        );
    }
}
export default SignUp;