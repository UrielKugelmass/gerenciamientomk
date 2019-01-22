import React, { Component } from 'react'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
              <Image className="nav-img d-inline-block align-top" src={require('./../img/MK-logo.jpg')} alt="Second slide"/>
              <Link className="company-name"to="/">MK Servicios De Ingeniería</Link>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar>
          <Nav pullRight>
            <NavItem eventKey={1} className='navitem' componentClass={Link} href="/" to="/">
              Inicio
            </NavItem>
            <NavItem eventKey={2} className='navitem' componentClass={Link} href="/quienesSomos" to="/quienesSomos">
              Quiénes Somos
            </NavItem>
            <NavItem eventKey={3} className='navitem' componentClass={Link} href="/obras" to="/obras">
              Obras
            </NavItem>
            <NavItem eventKey={4} className='navitem' componentClass={Link} href="/contacto" to="/contacto">
              Contacto
            </NavItem>
            <NavItem eventKey={5} className='navitem' componentClass={Link} href="/servicios" to="/servicios">
              Servicios
            </NavItem>
          </Nav>
        </Navbar>
      </Navbar>
  );
  }
}
export default CustomNavbar;