import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from '../Headers/Home';
import Information from '../Headers/Information';
import Admin from '../Headers/Admin';
import About from '../Headers/About';
import SignUp from '../Headers/SignUp';
import SignIn from '../Headers/SignIn';
import Banerright from'./Banerright';
class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: true
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Router>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" activeStyle={{ color: "red" }} exact to="/">
                <img src="./image/logo.PNG" alt="text" height="50" />
                Docs
              </NavLink>
            </div>
            <ul className="nav navbar-nav">
              <li className="active"><NavLink activeStyle={{ color: "red" }} to="/Home"  className="my-link">Home</NavLink></li>
              <li><NavLink activeStyle={{ color: "red" }} to="/Admin" className="my-link">Admin</NavLink></li>
              <li><NavLink activeStyle={{ color: "red" }} to="/Information" className="my-link">Information</NavLink></li>
              <li><NavLink activeStyle={{ color: "red" }} to="/About" className="my-link">About</NavLink></li>
            </ul>
            <div className="navbar-footer">
              <ul className="nav navbar-nav">
                <li><NavLink activeStyle={{ color: "red" }} to="/SignUp" className="my-link">SignUp</NavLink></li>
                <li><NavLink activeStyle={{ color: "red" }} to="/SignIn" className="my-link">SignIn</NavLink></li>
              </ul>

            </div>

          </div>
        </nav>
        <Route path="/" exact component={Banerright}></Route>
        <Route path="/Home" component={Home}></Route>
        <Route path="/Information" component={Information}></Route>
        <Route path="/Admin" component={Admin}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/SignUp" component={SignUp}></Route>
        <Route path="/SignIn" component={SignIn}></Route>

      </Router>
    );
  }
}
export default Header;