import React, { Component } from 'react';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            yourName: " ",
            Password:" ",
        };
    }

    handlechange = (event) => {
        this.setState({ 
            [event.target.name]:event.target.value,
        });
    }
    handlesubmit = (event) => {
        alert("your submit :" + this.state.yourName +", " +this.state.Password);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container">
                
               
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                 
                 <div className="panel panel-primary">
                       <div className="panel-heading">
                             <h3 className="panel-title">Sign In</h3>
                       </div>
                       <div className="panel-body">
                             
                             <form onSubmit={this.handlesubmit}>
                                 <div className="form-group">
                                     <label>Used Name :</label>
                                     <input type="text" name="yourName" className="form-control" onChange={this.handlechange} id="" placeholder="Enter your name"/>
                                 </div>
                             
                                 <div className="form-group">
                                     <label>Password :</label>
                                     <input type="password" name="Password" className="form-control" onChange={this.handlechange} id="" placeholder="Enter your password"/>
                                 </div>
                                 <div className="form-group">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox"  />
                                            <label className="form-check-label" htmlFor="myCheck">
                                                Remember sign in me
                                            </label>
                                        </div>
                                    </div>
                             
                                 <button type="submit" className="btn btn-primary">Submit</button>
                                 <button type="reset" className="btn btn-default">Reset</button>
                             </form>
                             
                       </div>
                 </div>
                 
                    
                </div>
            </div>
            
             
         </div>
        );
    }
}
export default SignIn;