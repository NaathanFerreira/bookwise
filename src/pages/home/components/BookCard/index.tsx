import { BookCardContainer, BookCardContent } from './styles'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'

interface BookCardProps {
  coverImageUrl: string
  title: string
  author: string
  rate: number
}

export default function BookCard({
  coverImageUrl,
  title,
  author,
  rate,
}: BookCardProps) {
  return (
    <BookCardContainer>
      <Image
        src={coverImageUrl}
        width={64}
        height={94}
        alt=" Book cover image "
      />
      <BookCardContent>
        <label>
          <h1>{title}</h1>
          <span>{author}</span>
        </label>
        <StarsRating rate={rate} />
      </BookCardContent>
    </BookCardContainer>
  )
}
