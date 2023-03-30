import React from 'react'

import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';

const MainNavbar = () => {
    return (
        <Navbar variant='dark' expand='lg'>
            <Container fluid>
                <Navbar.Toggle aria-controls='navbar' />
                <Navbar.Collapse id='navbar' className='d-flex flex-row-reverse'>
                    <Nav className='ml-auto d-flex'>
                        <Nav.Link as={Link} to='/'>
                            <h4 className='text-white'>Sign In</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/SignUp'>
                            <h4 className='text-white'>Sign Up</h4>
                        </Nav.Link>
                        <Nav.Link as={Link} to='/Dashboard'>
                            <h4 className='text-white'>Dashboard</h4>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default MainNavbar