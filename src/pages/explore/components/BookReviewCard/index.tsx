import StarsRating from '@/components/StarsRating'
import { BookReviewCardContainer, BookReviewCardHeader, User } from './styles'
import Image from 'next/image'
import { formatDistanceDate } from '@/utils/format-distance-date'
import { RatingWithAuthor } from '@/interfaces/ratings'

interface BookReviewCardProps {
  rating: RatingWithAuthor
}

export default function BookReviewCard({ rating }: BookReviewCardProps) {
  return (
    <BookReviewCardContainer>
      <BookReviewCardHeader>
        <User>
          <Image
            src={rating.user.avatar_url ?? ''}
            alt=" Profile avatar image "
            width={40}
            height={40}
          />

          <label>
            <h1>{rating.user.name}</h1>
            <span>{formatDistanceDate(rating.created_at.toString())}</span>
          </label>
        </User>
        <StarsRating rate={rating.rate} />
      </BookReviewCardHeader>
      <p>{rating.description}</p>
    </BookReviewCardContainer>
  )
}
