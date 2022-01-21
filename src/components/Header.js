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
                    <Nav.Link href="#home" className='text-black'>About Me</Nav.Link>
                    <Nav.Link href="#link" className='text-black'>Youtube</Nav.Link>
                    <Nav.Link href="#link" className='text-black'>Blog</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  </>);
}

export default Header;
