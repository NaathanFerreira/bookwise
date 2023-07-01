import StarsRating from '@/components/StarsRating'
import { BookReviewCardContainer, BookReviewCardHeader, User } from './styles'
import Image from 'next/image'
import { formatDistanceDate } from '@/utils/format-distance-date'

interface BookReviewCardProps {
  userImageUrl: string
  userName: string
  createdAt: Date
  rate: number
  comment: string
}

export default function BookReviewCard({
  userImageUrl,
  userName,
  createdAt,
  rate,
  comment,
}: BookReviewCardProps) {
  return (
    <BookReviewCardContainer>
      <BookReviewCardHeader>
        <User>
          <Image
            src={userImageUrl}
            alt=" Profile avatar image "
            width={40}
            height={40}
          />

          <label>
            <h1>{userName}</h1>
            <span>{formatDistanceDate(createdAt.toString())}</span>
          </label>
        </User>
        <StarsRating rate={rate} />
      </BookReviewCardHeader>
      <p>{comment}</p>
    </BookReviewCardContainer>
  )
}
