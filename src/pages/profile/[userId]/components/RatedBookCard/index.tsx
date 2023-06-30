import Image from 'next/image'
import {
  RatedBookCardContainer,
  RatedBookCardHeader,
  RatedBookCardInfos,
} from './styles'
import StarsRating from '@/components/StarsRating'

interface RatedBookCardProps {
  coverImageUrl: string
  title: string
  author: string
  rate: number
  comment: string
}

export default function RatedBookCard({
  coverImageUrl,
  title,
  author,
  rate,
  comment,
}: RatedBookCardProps) {
  return (
    <RatedBookCardContainer>
      <RatedBookCardHeader>
        <Image
          src={coverImageUrl}
          width={98}
          height={134}
          alt=" Book cover image "
        />
        <RatedBookCardInfos>
          <label>
            <h1>{title}</h1>
            <span>{author}</span>
          </label>
          <StarsRating rate={rate} />
        </RatedBookCardInfos>
      </RatedBookCardHeader>
      <p>{comment}</p>
    </RatedBookCardContainer>
  )
}
