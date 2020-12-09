import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  NavbarBrand,
} from "reactstrap";
import "./Header.css";

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
                  <NavLink>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>IncDec</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>IncWithNum</NavLink>
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
