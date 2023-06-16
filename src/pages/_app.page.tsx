import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  )
}
