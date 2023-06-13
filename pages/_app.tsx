import { wrapper } from '../src/store/store'
import { SessionProvider } from "next-auth/react"
import { Container, CssBaseline } from '@mui/material';
import Layout from '../src/Layout';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CssBaseline />
      <Layout />
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp)

