import * as Dialog from '@radix-ui/react-dialog'

import { BookListContainer } from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'
import BookCard from '../BookCard'
import BookDetailsDrawer from '../BookDetailsDrawer'
import { BooksWithAvgRating } from '@/interfaces/books'

interface BookListProps {
  filteredBooks: BooksWithAvgRating[]
}

export function BookList({ filteredBooks }: BookListProps) {
  const router = useRouter()
  const bookId = router.query.bookId

  function onOpenDetailsDrawerChange(open: boolean) {
    if (!open) {
      router.push('/explore', undefined, { shallow: true })
    }
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
