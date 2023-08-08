import Image from 'next/image'
import {
  ContentWrapper,
  LastReadCardContainer,
  LastReadCardContent,
  LastReadCardHeader,
} from './styles'
import StarsRating from '@/components/StarsRating'
import { formatDistanceDate } from '@/utils/format-distance-date'

interface LastReadCardProps {
  bookCoverImg: string
  createdAt: string
  rate: number
  bookName: string
  bookAuthor: string
  comment: string
}

export default function LastReadCard({
  bookCoverImg,
  createdAt,
  rate,
  bookAuthor,
  bookName,
  comment,
}: LastReadCardProps) {
  return (
    <LastReadCardContainer>
      <Image
        src={bookCoverImg}
        width={108}
        height={152}
        alt=" Book cover image "
      />
      <ContentWrapper>
        <LastReadCardHeader>
          <span>{formatDistanceDate(createdAt)}</span>
          <StarsRating rate={rate} />
        </LastReadCardHeader>
        <LastReadCardContent>
          <label>
            <h1>{bookName}</h1>
            <span>{bookAuthor}</span>
          </label>

          <p>{comment}</p>
        </LastReadCardContent>
      </ContentWrapper>
    </LastReadCardContainer>
  )
}
