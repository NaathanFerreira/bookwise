import Image from 'next/image'
import {
  ContentWrapper,
  LastReadCardContainer,
  LastReadCardContent,
  LastReadCardHeader,
} from './styles'
import StarsRating from '@/components/StarsRating'
import { formatDistanceDate } from '@/utils/format-distance-date'
import { RatingWithBook } from '@/interfaces/ratings'

interface LastReadCardProps {
  rating: RatingWithBook
}

export default function LastReadCard({ rating }: LastReadCardProps) {
  return (
    <LastReadCardContainer>
      <Image
        src={rating.book.cover_url}
        width={108}
        height={152}
        alt=" Book cover image "
      />
      <ContentWrapper>
        <LastReadCardHeader>
          <span>{formatDistanceDate(rating.created_at.toString())}</span>
          <StarsRating rate={rating.rate} />
        </LastReadCardHeader>
        <LastReadCardContent>
          <label>
            <h1>{rating.book.name}</h1>
            <span>{rating.book.author}</span>
          </label>

          <p>{rating.description}</p>
        </LastReadCardContent>
      </ContentWrapper>
    </LastReadCardContainer>
  )
}
