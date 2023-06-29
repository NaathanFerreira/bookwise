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

type BooksWithAvgRating = {
  avgRating: number
  id: string
  created_at: Date
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
}

interface RatingsApiResponse {
  ratings: RatingWithBookAndUser[]
}

interface MostPopularBooksApiResponse {
  mostPopularBooks: BooksWithAvgRating[]
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

  const { data: mostPopularBooks } = useQuery<BooksWithAvgRating[]>(
    ['mostPopularBooks'],
    async () => {
      const response = await api.get<MostPopularBooksApiResponse>(
        '/books/most-popular',
      )
      return response.data.mostPopularBooks
    },
  )

  const isUserLoggedIn = session.status === 'authenticated'
  const userId = session.data?.user.id

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
              {ratings?.map((rating) => {
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
            {mostPopularBooks?.map((book) => {
              return (
                <BookCard
                  key={book.id}
                  coverImageUrl={book.cover_url}
                  title={book.name}
                  author={book.author}
                  rate={book.avgRating}
                />
              )
            })}
          </PopularBooksList>
        </HomeContent>
      </HomePageContainer>
    </DefaultLayout>
  )
}
