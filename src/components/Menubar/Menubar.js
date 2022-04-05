import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './Menubar.css';
import logoUrl from '../../Assets/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';


const Menubar = () => {
  return (
    <div>
      <Navbar className='menu-bar' expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              <img
                src={logoUrl}
                className="d-inline-block align-top site-logo"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='menu-bar-toggle'>
            <span>
              <GiHamburgerMenu></GiHamburgerMenu>
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto sm-menu-bar-spacing">
              <CustomLink to="/" className="nav-item">Home</CustomLink>
              <CustomLink to="/reviews" className="nav-item">Reviews</CustomLink>
              <CustomLink to="/dashboard" className="nav-item">Dashboard</CustomLink>
              <CustomLink to="/blogs" className="nav-item">Blogs</CustomLink>
              <CustomLink to="/about" className="nav-item">About</CustomLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menubar;