import * as Dialog from '@radix-ui/react-dialog'

import { BookListContainer } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BookCard from '../BookCard'
import BookDetailsDrawer from '../BookDetailsDrawer'
import { BooksWithAvgRating } from '@/interfaces/books'
import { SkeletonTheme } from 'react-loading-skeleton'
import { SkeletonBookCard } from '../BookCard/SkeletonBookCard'

interface BookListProps {
  filteredBooks: BooksWithAvgRating[]
  isFecthingBooks: boolean
}

export function BookList({ filteredBooks, isFecthingBooks }: BookListProps) {
  const router = useRouter()
  const bookId = router.query.bookId

  function onOpenDetailsDrawerChange(open: boolean) {
    if (!open) {
      router.push('/explore', undefined, { shallow: true })
    }
  }

  if (isFecthingBooks) {
    return (
      <BookListContainer>
        <SkeletonTheme
          baseColor="#252D4A"
          highlightColor="#303F73"
          borderRadius="0.5rem"
          duration={4}
        >
          {Array.from({ length: 16 }).map((_, index) => (
            <SkeletonBookCard key={index} />
          ))}
        </SkeletonTheme>
      </BookListContainer>
    )
  }

  return (
    <>
      <BookListContainer>
        <Dialog.Root open={!!bookId} onOpenChange={onOpenDetailsDrawerChange}>
          {filteredBooks.map((book) => {
            return (
              <Dialog.Trigger asChild key={book.id}>
                <Link href={`/explore?bookId=${book.id}`}>
                  <BookCard
                    coverImageUrl={book.cover_url}
                    title={book.name}
                    author={book.author}
                    rate={book.avgRating}
                  />
                </Link>
              </Dialog.Trigger>
            )
          })}
          <BookDetailsDrawer />
        </Dialog.Root>
      </BookListContainer>
    </>
  )
}
