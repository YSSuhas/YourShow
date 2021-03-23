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
import "../cssstyle.css"
import Search from '../../components/search';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="TextStyle NavTextSize white-text">
      <Navbar backgroundColor="transparent" expand="md" fixed="top">
      <MDBContainer>
        <NavbarBrand href="/home" className="white-text">YS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto white-text" navbar>
            <NavItem>
              <NavLink href="/movies" className="white-text">Movies</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
    <Nav>
            <NavItem>
              <NavLink href="/profile" className="white-text">My Profile</NavLink>
            </NavItem>
        </Nav>
        </MDBContainer>
      </Navbar>
    </div>
  );
}

export default NavBar;