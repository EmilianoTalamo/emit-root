import type { AppProps } from 'next/app'
import '@/styles/vendors/_emit-normalize.scss'
import '@/styles/style.scss'

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
