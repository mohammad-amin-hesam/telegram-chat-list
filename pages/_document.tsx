import * as React from "react";
import Document, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheet as StyledComponentSheets } from "styled-components";

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const styledComponentSheet = new StyledComponentSheets();
		const originalRenderPage = ctx.renderPage;
		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) =>
						styledComponentSheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: [
					<React.Fragment key="styles">
						{initialProps.styles}
						{styledComponentSheet.getStyleElement()}
					</React.Fragment>,
				],
			};
		} finally {
			styledComponentSheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<link rel="preconnect" href="https://fonts.gstatic.com" />
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito:wght@200&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap"
						rel="stylesheet"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Nunito&display=swap"
						rel="stylesheet"
					/>
					<link
						rel="icon"
						type="image/png"
						href="https://telegram.org/img/t_logo.png?1"
					/>
				</Head>
				<body dir="ltr">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
