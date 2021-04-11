import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import darkTheme from 'styles/themes/dark'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={darkTheme}>
			<Head>
				<title>Andrey Oliveira</title>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
					rel="stylesheet"
				/>
				<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" href="favicon.ico" type="image/x-icon" />
				<meta
					name="description"
					content="A simple boilerplate to work with nextjs and typescript"
				/>
			</Head>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
