import Image from 'next/image'
import {
  BookInformations,
  BookTitle,
  ReviewCardContainer,
  ReviewCardContent,
  ReviewCardHeader,
} from './styles'
import StarsRating from '@/components/StarsRating'
import { formatDistanceDate } from '@/utils/format-distance-date'
import { RatingWithBookAndUser } from '@/interfaces/ratings'

interface ReviewCardProps {
  rating: RatingWithBookAndUser
}

export default function ReviewCard({ rating }: ReviewCardProps) {
  return (
    <ReviewCardContainer>
      <ReviewCardHeader>
        <label>
          <Image
            src={rating.user.avatar_url!}
            alt=" Review owner avatar image "
            width={40}
            height={40}
          />
          <div>
            <h1>{rating.user.name}</h1>
            <span>{formatDistanceDate(rating.created_at.toString())}</span>
          </div>
        </label>
        <StarsRating rate={rating.rate} />
      </ReviewCardHeader>
      <ReviewCardContent>
        <Image
          src={rating.book.cover_url}
          alt=" Book cover image "
          width={108}
          height={152}
        />
        <BookInformations>
          <BookTitle>
            <h1>{rating.book.name}</h1>
            <span>{rating.book.author}</span>
          </BookTitle>
          <p>{rating.description}</p>
        </BookInformations>
      </ReviewCardContent>
    </ReviewCardContainer>
  )
}
