import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { StarsRatingContainer } from './styles'

export default function StarsRating() {
  return (
    <StarsRatingContainer>
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiFillStar />
      <AiOutlineStar />
    </StarsRatingContainer>
  )
}
