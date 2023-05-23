import '../styles/globals.css'
import { wrapper } from '../src/store'
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(MyApp)

