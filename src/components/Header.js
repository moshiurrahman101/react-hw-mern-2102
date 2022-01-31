import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Header() {
  return (<>
        <Navbar bg="white" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><b style={{color: 'black'}}>Rm Hridoy</b></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/#blog" className='text-black'>Blog</Nav.Link>
                    <Nav.Link href="/#signup" className='text-black'>Sign up</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  </>);
}

export default Header;
