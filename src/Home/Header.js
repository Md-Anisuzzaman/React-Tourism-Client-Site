import React from 'react';
import './Header.css'

import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../Hook/useAuth';



const Header = () => {

    const { user, logOut } = useAuth();
    const handlelogOut = () => {
        logOut();
    }

    return (

        <Navbar className="nav-position header-body" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand className="text-warning font-style fs-3">TourismBD</Navbar.Brand>
                <Nav className="mr-auto nav-body">
                    {/* <Nav.Link style={{ color: 'white' }} className="font-style" to="/home">Home</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} className="font-style" to="/services">Services</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} className="font-style" to="/about">About</Nav.Link>
                    <Nav.Link style={{ color: 'white' }} className="font-style" to="/contact">Contact</Nav.Link> */}
                    <Link style={{ color: 'white' }} className="font-style" to="/home">Home</Link>
                    <Link style={{ color: 'white' }} className="font-style" to="/services">Services</Link>
                    <Link style={{ color: 'white' }} className="font-style" to="/managebooking">Manage-Booking</Link>
                    <Link style={{ color: 'white' }} className="font-style" to="/about">About</Link>
                    <Link style={{ color: 'white' }} className="font-style" to="/contact">Contact</Link>
                    {/* <Nav.Link style={{ color: 'white' }} to="/login"><Button style={{'fontSize':'22px'}} className="btn btn-dark">Login</Button> </Nav.Link>
                    <Nav.Link style={{ color: 'white' }} to="/login"><Button style={{'fontSize':'22px'}} className="btn btn-dark">Login</Button> </Nav.Link> */}

                    {user?.email ?
                        <button className="font-style" onClick={handlelogOut} style={{ color: 'black' }} >Logout</button> :
                        <Link className="font-style" style={{ color: 'white' }} to="/login">Login</Link>}
                </Nav>
            </Container>
        </Navbar>


    );
};

export default Header;