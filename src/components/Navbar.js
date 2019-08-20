import React from 'react';


import { Link } from 'react-router-dom'; 
import {Navbar,Nav, NavDropdown}from 'react-bootstrap';

const NavBar = () => {

  return(
      <div>
   <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">Logistics</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav ">
    <Nav className="mr-auto ">
      
      
      
    </Nav>
    <Nav id="linkcolor">
      <Nav.Link href="#deets">Home</Nav.Link>
      <Nav.Link href="#deets">About Us</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Air Frieght</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Sea Freight</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Packing & Removals</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Warehouse</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link >Contact</Nav.Link>
   </Nav>
  </Navbar.Collapse>
</Navbar>
</div>
    )
  }





  
export default NavBar;