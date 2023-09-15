import Skeleton from 'react-loading-skeleton'
import { BookCardContainer, BookCardContent } from './styles'

export function SkeletonBookCard() {
  return (
    <BookCardContainer>
      <Skeleton width={108} height={152} />
      <BookCardContent>
        <label>
          <Skeleton width={130} height={20} />
          <Skeleton width={100} height={15} />
        </label>
        <Skeleton width={120} height={20} />
      </BookCardContent>
    </BookCardContainer>
  )
}
