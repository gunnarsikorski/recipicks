import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
			<Navbar collapseOnSelect variant='light' expand='md'>
				<Navbar.Brand as={Link} to='/'>
					<h4>Recipicks</h4>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav>
						<Nav.Link as={Link} to='/food'>
							Food
						</Nav.Link>
						<Nav.Link as={Link} to='/drink'>
							Drink
						</Nav.Link>
						<Nav.Link as={Link} to='/search'>
							Search
						</Nav.Link>
						<Nav.Link as={Link} to='/about'>
							About
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
};

export default Header;