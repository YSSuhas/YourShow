import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { MDBContainer, MDBCol, MDBFormInline, MDBBtn } from 'mdbreact';
import "../screen/cssstyle.css"

const LoginForm = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="TextStyle NavTextSize white-text">
      <Navbar backgroundColor="transparent" expand="md" fixed="top">
      <MDBContainer>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto white-text LoginText" navbar>
            <NavItem>
              <NavLink href="/" className="white-text">User Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/admin/login" className="white-text">Admin Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/register" className="white-text">Register</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        </MDBContainer>
      </Navbar>
    </div>
  );
}

export default LoginForm;