import { Rating, StickerStar } from '@smastrom/react-rating'
import { StarsRatingContainer } from './styles'

export const startsRatingStyles = {
  itemShapes: StickerStar,
  itemStrokeWidth: 2,
  activeFillColor: '#8381D9',
  activeStrokeColor: '#8381D9',
  inactiveStrokeColor: '#8381D9',
}

interface StarsRatingProps {
  rate: number
}

export default function StarsRating({ rate }: StarsRatingProps) {
  return (
    <StarsRatingContainer>
      <Rating value={rate} readOnly itemStyles={startsRatingStyles} />
    </StarsRatingContainer>
  )
}
