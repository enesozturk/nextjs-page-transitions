import React, { useState, useEffect } from 'react';
import Router from 'next/router';

import { Container, Row } from 'react-bootstrap';
import { Tabs } from 'gestalt';

export const NavBar = ({ items }) => {
	const [ activeIndex, setActiveIndex ] = useState(-1);
	useEffect(
		() => {
			const handleRouteChange = (url) => {
				const newActiveIndex = items.findIndex((item) => item.href === url);
				setActiveIndex(newActiveIndex);
			};

			Router.events.on('routeChangeComplete', handleRouteChange);
			handleRouteChange(Router.route);

			return () => Router.events.off('routeChangeComplete', handleRouteChange);
		},
		[ items ]
	);

	return (
		<Container style={{ boxSizing: 'border-box', padding: '.5em 0' }}>
			<Row>
				<Tabs tabs={items} activeTabIndex={activeIndex} onChange={() => {}} />
			</Row>
		</Container>
	);
};
