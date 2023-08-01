import { wrapper } from '../src/store/store'
import { SessionProvider } from "next-auth/react"
import { Container, CssBaseline } from '@mui/material';

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <CssBaseline />
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
}

export default wrapper.withRedux(MyApp)

