import { BookCardContainer, BookCardContent } from './styles'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'
import { BookWithAvgRating } from '@/interfaces/books'

interface BookCardProps {
  book: BookWithAvgRating
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <BookCardContainer href={`/explore?bookId=${book.id}`}>
      <Image
        src={book.cover_url}
        width={64}
        height={94}
        alt=" Book cover image "
      />
      <BookCardContent>
        <label>
          <h1>{book.name}</h1>
          <span>{book.author}</span>
        </label>
        <StarsRating rate={book.avgRating} />
      </BookCardContent>
    </BookCardContainer>
  )
}
