import DefaultLayout from '@/layout/DefaultLayout'
import { IoIosArrowForward } from 'react-icons/io'
import { BsGraphUpArrow } from 'react-icons/bs'
import {
  HomePageContainer,
  HomeContent,
  PopularBooksList,
  RecentReviewsList,
  LastReadBookContainer,
} from './styles'
import Link from 'next/link'
import ReviewCard from './components/ReviewCard'
import BookCard from './components/BookCard'
import LastReadCard from './components/LastReadCard'
import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()

  const isUserLoggedIn = session.status === 'authenticated'
  const userId = session.data?.userId

  return (
    <DefaultLayout>
      <HomePageContainer>
        <h1>
          <BsGraphUpArrow /> Home
        </h1>
        <HomeContent>
          <div>
            {isUserLoggedIn && (
              <LastReadBookContainer>
                <span>
                  <h5>Your last read</h5>
                  <Link href={`/profile/${userId}`}>
                    View all <IoIosArrowForward />
                  </Link>
                </span>
                <LastReadCard />
              </LastReadBookContainer>
            )}
            <RecentReviewsList>
              <h5>Most recent reviews</h5>
              <ReviewCard />
              <ReviewCard />
              <ReviewCard />
            </RecentReviewsList>
          </div>
          <PopularBooksList>
            <span>
              <h5>Popular books</h5>
              <Link href="/explore">
                View all <IoIosArrowForward />
              </Link>
            </span>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </PopularBooksList>
        </HomeContent>
      </HomePageContainer>
    </DefaultLayout>
  )
}
