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

interface ReviewCardProps {
  userName: string
  userAvatarUrl: string | null
  createdAt: Date
  rate: number
  bookCoverImageUrl: string
  bookName: string
  bookAuthorName: string
  bookDescription: string
}

export default function ReviewCard(props: ReviewCardProps) {
  const {
    userName,
    userAvatarUrl,
    createdAt,
    rate,
    bookCoverImageUrl,
    bookName,
    bookAuthorName,
    bookDescription,
  } = props

  return (
    <ReviewCardContainer>
      <ReviewCardHeader>
        <label>
          <Image
            src={userAvatarUrl ?? ''}
            alt=" Review owner avatar image "
            width={40}
            height={40}
          />
          <div>
            <h1>{userName}</h1>
            <span>{formatDistanceDate(createdAt.toString())}</span>
          </div>
        </label>
        <StarsRating rate={rate} />
      </ReviewCardHeader>
      <ReviewCardContent>
        <Image
          src={bookCoverImageUrl}
          alt=" Book cover image "
          width={108}
          height={152}
        />
        <BookInformations>
          <BookTitle>
            <h1>{bookName}</h1>
            <span>{bookAuthorName}</span>
          </BookTitle>
          <p>{bookDescription}</p>
        </BookInformations>
      </ReviewCardContent>
    </ReviewCardContainer>
  )
}
