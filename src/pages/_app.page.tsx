import { queryClient } from '@/lib/react-query'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import { SessionProvider } from 'next-auth/react'
import { AppProps } from 'next/app'
import { QueryClientProvider } from 'react-query'
import '@smastrom/react-rating/style.css'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <SessionProvider session={session}>
        <Container>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'en_US',
              url: 'https://www.nf-bookwise.vercel.app',
              siteName: 'Bookwise',
            }}
          />
          <Component {...pageProps} />
        </Container>
      </SessionProvider>
    </QueryClientProvider>
  )
}
