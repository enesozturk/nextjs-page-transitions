import App, { Container } from 'next/app';
import React from 'react';
import { Transition, animated } from 'react-spring';
import NavBar from '../components/Navbar';

export default class NextApp extends App {
	static async getInitialProps({ Component, router, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx);
		}

		return { pageProps };
	}

	render() {
		const items = [
			{
				id: this.props.router.route,
				Component: this.props.Component,
				pageProps: this.props.pageProps
			}
		];
		return (
			<Container>
				<NavBar />
				<Transition
					items={items}
					keys={(items) => items.Component}
					from={{ opacity: 0 }}
					enter={{ opacity: 1 }}
					leave={{ opacity: 0 }}
					config={{ duration: 200 }}
				>
					{({ Component, pageProps }) => (styles) => (
						<animated.div style={styles}>
							<Component {...pageProps} />
						</animated.div>
					)}
				</Transition>
			</Container>
		);
	}
}
