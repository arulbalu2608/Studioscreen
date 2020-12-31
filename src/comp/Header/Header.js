import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavbarBrand,
} from "reactstrap";
import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../Images/logo.jpg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
    };
  }
  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  };

  render() {
    return (
      <div>
        <Navbar dark expand="md">
          <div className="container">
            <NavbarBrand href="/">Studio Screen</NavbarBrand>

            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    exact
                    to="/"
                    onClick={this.toggleNav}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    exact
                    to="/about"
                    onClick={this.toggleNav}>
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className="nav-link"
                    exact
                    to="/gallery"
                    onClick={this.toggleNav}>
                    Gallery
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
