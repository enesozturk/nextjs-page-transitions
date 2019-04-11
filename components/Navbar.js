import React from 'react';
import { Container, Row, Nav } from 'react-bootstrap';

export default class NavBar extends React.PureComponent {
	render() {
		return (
			<Container>
				<Row>
					<Nav>
						<Nav.Item>
							<Nav.Link href="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="/about">About</Nav.Link>
						</Nav.Item>
					</Nav>
				</Row>
			</Container>
		);
	}
}
