import * as React from "react";
import App from "next/app";
import { ThemeProvider, createGlobalStyle } from "styled-components";

// Redux...
import { Provider } from "react-redux";
import withRedux, { ReduxWrapperAppProps } from "next-redux-wrapper";
import { makeStore } from "../redux/store";

// CSS...
import reset from "../public/styles/reset";

export interface ThemeProps {
	colors: {
		primary: string;
		secondary: string;
		tertiary: string;
		quaternary: string;
		quinary: string;
		senary: string;
		septenary: string;
	};
}

export const theme: ThemeProps = {
	colors: {
		primary: "#0E1621",
		secondary: "#4388B9",
		tertiary: "#F5F5F5",
		quaternary: "#738495",
		quinary: "#17212B",
		senary: "#3E546A",
		septenary: "#9fd1ff",
	},
};

const GlobalStyle = createGlobalStyle`
	${reset(theme)}
`;

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
