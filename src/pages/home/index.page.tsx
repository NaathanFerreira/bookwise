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
import { useQuery } from 'react-query'
import ReviewCard from './components/ReviewCard'
import BookCard from './components/BookCard'
import LastReadCard from './components/LastReadCard'
import { useSession } from 'next-auth/react'
import { api } from '@/lib/axios'
import { Prisma } from '@prisma/client'

type RatingWithBookAndUser = Prisma.RatingGetPayload<{
  include: {
    book: true
    user: true
  }
}>

interface RatingsApiResponse {
  ratings: RatingWithBookAndUser[]
}

export default function Home() {
  const session = useSession()

  const { data: ratings } = useQuery<RatingWithBookAndUser[]>(
    ['ratings'],
    async () => {
      const response = await api.get<RatingsApiResponse>('/ratings')
      return response.data.ratings
    },
  )

  const isUserLoggedIn = session.status === 'authenticated'
  const userId = session.data?.userId

  if (!ratings) return

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
              {ratings.map((rating) => {
                return (
                  <ReviewCard
                    key={rating.id}
                    userName={rating.user.name}
                    userAvatarUrl={rating.user.avatar_url}
                    rate={rating.rate}
                    createdAt={rating.created_at}
                    bookAuthorName={rating.book.author}
                    bookName={rating.book.name}
                    bookDescription={rating.book.summary}
                    bookCoverImageUrl={rating.book.cover_url}
                  />
                )
              })}
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
