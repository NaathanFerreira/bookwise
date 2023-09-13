import { BookCardContainer, BookCardContent } from './styles'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'
import { BookWithAvgRating } from '@/interfaces/books'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function SkeletonBookCard() {
  return (
    <SkeletonTheme
      baseColor="#252D4A"
      highlightColor="#303F73"
      borderRadius="0.5rem"
      duration={4}
    >
      <BookCardContainer href={`/`}>
        <div>
          <Skeleton width={64} height={94} />
        </div>
        <BookCardContent>
          <label>
            <Skeleton width={130} height={20} />
            <Skeleton width={100} height={15} />
          </label>
          <Skeleton width={120} height={20} />
        </BookCardContent>
      </BookCardContainer>
    </SkeletonTheme>
  )
}
