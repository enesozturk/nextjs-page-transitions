import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export default class NavBar extends React.PureComponent {
	render() {
		return (
			<Navbar expand="lg" bg="dark" variant="dark">
				<Navbar.Brand href="/">Next Js Page Transitions</Navbar.Brand>
				<Navbar.Toggle />
				<Navbar.Collapse>
					<Nav>
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
