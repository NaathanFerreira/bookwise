import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import '@smastrom/react-rating/style.css'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </SessionProvider>
    </QueryClientProvider>
  )
}
