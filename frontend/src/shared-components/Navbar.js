import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar className="pages" default collapseOnSelect>
        {/* <Navbar.Header> */}
          {/* <Navbar> */}
              {/* <Image className="column logo" src={require('./../img/MK-logo.jpg')} alt="Second slide"/> */}
          {/* </Navbar> */}
        {/* </Navbar.Header> */}
        {/* <Navbar className="column pages"> */}
          <Nav>
            <NavItem>
              <Image className="logo" src={require('./../img/MK-logo.jpg')} alt="Second slide"/>
            </NavItem>
            <NavItem eventKey={1} className='navitem' componentClass={Link} href="/" to="/">
              Inicio
            </NavItem>
            <NavItem eventKey={2} className='navitem' componentClass={Link} href="/quienesSomos" to="/quienesSomos">
              Quiénes Somos
            </NavItem>
            <NavItem eventKey={3} className='navitem' componentClass={Link} href="/obras" to="/obras">
              Obras
            </NavItem>
            <NavItem eventKey={5} className='navitem' componentClass={Link} href="/servicios" to="/servicios">
              Servicios
            </NavItem>
            {/* <NavItem eventKey={4} className='navitem' componentClass={Link} href="/contacto" to="/contacto">
              Contacto
            </NavItem> */}
            
            
          </Nav>
        {/* </Navbar> */}
      </Navbar>
  );
  }
}
export default CustomNavbar;