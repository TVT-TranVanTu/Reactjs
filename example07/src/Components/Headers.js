import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';
import { Link } from "react-router-dom";

class Headers extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.setState.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink>
                                    <Link to="/">Home</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/Products/">Products</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/SignUp" >SignUp</Link>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink>
                                    <Link to="/Login/">Login</Link>
                                </NavLink>
                            </NavItem>
                        </Nav>


                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Headers;