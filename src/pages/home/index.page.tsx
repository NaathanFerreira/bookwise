import DefaultLayout from '@/layout/DefaultLayout'
import { IoIosArrowForward } from 'react-icons/io'
import { BsGraphUpArrow } from 'react-icons/bs'
import {
  HomePageContainer,
  HomeContent,
  PopularBooksList,
  RecentReviewsList,
} from './styles'
import Link from 'next/link'
import ReviewCard from './components/ReviewCard'

export default function Home() {
  return (
    <DefaultLayout>
      <HomePageContainer>
        <h1>
          <BsGraphUpArrow /> Home
        </h1>
        <HomeContent>
          <RecentReviewsList>
            <h5>Most recent reviews</h5>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </RecentReviewsList>
          <PopularBooksList>
            <span>
              <h5>Popular books</h5>
              <Link href="/">
                Ver todos <IoIosArrowForward />
              </Link>
            </span>
            <div>
              <p>Book 4</p>
            </div>
            <div>
              <p>Book 4</p>
            </div>
            <div>
              <p>Book 4</p>
            </div>
          </PopularBooksList>
        </HomeContent>
      </HomePageContainer>
    </DefaultLayout>
  )
}
