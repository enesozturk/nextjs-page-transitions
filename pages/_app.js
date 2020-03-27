import App, { Container } from "next/app";
import React from "react";
import { Transition, animated } from "react-spring";
import { Navbar } from "../src/Navbar";

import "../src/styles.css";

export default class NextApp extends App {
  render() {
    const transitionItems = [
      {
        id: this.props.router.route,
        Component: this.props.Component,
        pageProps: this.props.pageProps
      }
    ];
    return (
      <Container>
        <Navbar />
        <Transition
          native
          unique
          items={transitionItems}
          keys={transitionItems => transitionItems.id}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
          config={{ duration: 300 }}
        >
          {({ Component, pageProps }) => styles => (
            <animated.div style={styles}>
              <Component {...pageProps} />
            </animated.div>
          )}
        </Transition>
      </Container>
    );
  }
}
