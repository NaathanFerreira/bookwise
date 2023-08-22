import DefaultLayout from '@/layout/DefaultLayout'
import { BsGraphUpArrow } from 'react-icons/bs'
import { HomePageContainer, HomeContent } from './styles'
import { LastReadSection } from './components/LastReadSection'
import { LatestReviewsSection } from './components/LatestReviewsSection'
import { PopularBooksSection } from './components/PopularBooksSection'
import { NextSeo } from 'next-seo'

export default function Home() {
  return (
    <>
    <NextSeo
      title="BookWise - Home"
    />
    <DefaultLayout>
      <HomePageContainer>
        <h1>
          <BsGraphUpArrow /> Home
        </h1>
        <HomeContent>
          <div>
            <LastReadSection />
            <LatestReviewsSection />
          </div>
          <PopularBooksSection />
        </HomeContent>
      </HomePageContainer>
    </DefaultLayout>
    </>
  )
}
