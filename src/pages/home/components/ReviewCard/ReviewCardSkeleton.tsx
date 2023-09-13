import {
  BookInformations,
  BookTitle,
  ReviewCardContainer,
  ReviewCardContent,
  ReviewCardHeader,
} from './styles'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Link from 'next/link'

export default function ReviewCardSkeleton() {
  return (
    <SkeletonTheme
      baseColor="#252D4A"
      highlightColor="#303F73"
      borderRadius="0.5rem"
      duration={4}
    >
      <ReviewCardContainer>
        <ReviewCardHeader>
          <Link href="/">
            <Skeleton circle width={40} height={40} />
            <div>
              <Skeleton width={110} height={20} />
              <Skeleton width={110} height={15} />
            </div>
          </Link>
          <Skeleton width={100} height={20} />
        </ReviewCardHeader>
        <ReviewCardContent href={`/`}>
          <Skeleton width={108} height={152} />
          <BookInformations>
            <BookTitle>
              <Skeleton width={110} height={20} />
              <Skeleton width={110} height={15} />
            </BookTitle>
            <Skeleton width={400} height={20} count={3} />
          </BookInformations>
        </ReviewCardContent>
      </ReviewCardContainer>
    </SkeletonTheme>
  )
}
