import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">User Registration</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><span><Link to="/">Create Account</Link></span></Nav.Link>
            <Nav.Link href="#features"><span><Link to="/login">Sign In page</Link></span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header