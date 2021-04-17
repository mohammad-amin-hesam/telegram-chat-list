import * as React from "react";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

// Redux...
import { Provider } from "react-redux";
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import { makeStore } from "../redux/store";

// CSS...
import reset from "../public/styles/reset";
import grid from "../public/styles/grid";

const GlobalStyle = createGlobalStyle`
  ${grid}
  ${reset}
`;

const theme = {
	colors: {
		primary: "#252584",
		secondary: "#4DD7FF",
		tertiary: "#A8A8C4",
	},
};

class MyApp extends App<ReduxWrapperAppProps> {
	static async getInitialProps({ Component, ctx }) {
		let pageProps = {};

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps({ ...ctx });
		}

		return { pageProps: { ...pageProps } };
	}

	componentDidMount() {
		const jssStyles = document.querySelector("#jss-server-side");
		if (jssStyles && jssStyles.parentNode)
			jssStyles.parentNode.removeChild(jssStyles);
	}

	componentDidCatch(error, errorInfo) {
		super.componentDidCatch(error, errorInfo);
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<>
				<Provider store={store}>
					<ThemeProvider theme={theme}>
						<Component {...pageProps} />
						<GlobalStyle />
					</ThemeProvider>
				</Provider>
			</>
		);
	}
}

export default withRedux(makeStore, { debug: false })(MyApp);
