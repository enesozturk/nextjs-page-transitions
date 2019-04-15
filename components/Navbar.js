import React from 'react';
import Link from 'next/link';

import { Container, Row, Col, Nav } from 'react-bootstrap';

export const NavBar = ({ items }) => {
	return (
		<Container>
			<Row>
				<Nav variant="pills">
					{items.map((item, index) => (
						<Nav.Item>
							<Link key={index} href={item.href}>
								<a className="nav-link">{item.title}</a>
							</Link>
						</Nav.Item>
					))}
				</Nav>
			</Row>
		</Container>
	);
};
