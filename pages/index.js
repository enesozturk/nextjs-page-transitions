import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Home extends Component {
	render() {
		return (
			<Container style={{ position: 'absolute', marginTop: '2em' }}>
				<Row>
					<Col>
						<h1>Home</h1>
					</Col>
				</Row>
			</Container>
		);
	}
}
