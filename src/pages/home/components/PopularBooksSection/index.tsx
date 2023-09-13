import { IoIosArrowForward } from 'react-icons/io'
import { PopularBooksList } from './styles'
import Link from 'next/link'
import BookCard from '../BookCard'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { MostPopularBooksApiResponse } from '@/interfaces/books'
import SkeletonBookCard from '../BookCard/SkeletonBookCard'

export function PopularBooksSection() {
  const { data: mostPopularBooks, isLoading } = useQuery(
    ['mostPopularBooks'],
    async () => {
      const response = await api.get<MostPopularBooksApiResponse>(
        '/books/most-popular',
      )
      return response.data.mostPopularBooks
    },
  )

  if (isLoading) {
    return (
      <PopularBooksList>
        <span>
          <h5>Popular books</h5>
          <Link href="/explore">
            View all <IoIosArrowForward />
          </Link>
        </span>
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
      </PopularBooksList>
    )
  }

  return (
    <>
      <PopularBooksList>
        <span>
          <h5>Popular books</h5>
          <Link href="/explore">
            View all <IoIosArrowForward />
          </Link>
        </span>
        {mostPopularBooks?.map((book) => {
          return <BookCard key={book.id} book={book} />
        })}
      </PopularBooksList>
    </>
  )
}
