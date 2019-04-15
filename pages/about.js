import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class About extends Component {
	render() {
		return (
			<Container style={{ position: 'absolute', marginTop: '2em' }}>
				<Row>
					<Col>
						<h1>About</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}
