import DefaultLayout from '@/layout/DefaultLayout'
import { BsGraphUpArrow } from 'react-icons/bs'
import { HomePageContainer, HomeContent } from './styles'
import { LastReadSection } from './components/LastReadSection'
import { LatestReviewsSection } from './components/LatestReviewsSection'
import { PopularBooksSection } from './components/PopularBooksSection'

export default function Home() {
  return (
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
  )
}
