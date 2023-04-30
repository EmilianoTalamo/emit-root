import type { AppProps } from 'next/app'
import '@/styles/vendors/_emit-normalize.scss'
import '@/styles/style.scss'
import { StyledEngineProvider } from '@mui/material'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<StyledEngineProvider injectFirst>
			<Component {...pageProps} />
		</StyledEngineProvider>
	)
}
