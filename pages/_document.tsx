import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
	const gtag = process.env.GTAG

	return (
		<Html lang="en">
			<Head>
				<Script
					strategy="afterInteractive"
					src={`https://www.googletagmanager.com/gtag/js?id=${gtag}`}
				></Script>
				<Script id="google-analytics" strategy="afterInteractive">
					{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gtag}');
        `}
				</Script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
