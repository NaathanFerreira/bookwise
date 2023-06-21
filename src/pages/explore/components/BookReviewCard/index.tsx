import StarsRating from '@/components/StarsRating'
import { BookReviewCardContainer, BookReviewCardHeader, User } from './styles'
import Image from 'next/image'

export default function BookReviewCard() {
  return (
    <BookReviewCardContainer>
      <BookReviewCardHeader>
        <User>
          <Image
            src="https://avatars.githubusercontent.com/u/35970600?v=4"
            alt=" Profile avatar image "
            width={40}
            height={40}
          />

          <label>
            <h1>Brandon Botosh</h1>
            <span>2 days ago</span>
          </label>
        </User>
        <StarsRating />
      </BookReviewCardHeader>
      <p>
        Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
        Penatibus id vestibulum imperdiet a at imperdiet lectus leo. Sit porta
        eget nec vitae sit vulputate eget
      </p>
    </BookReviewCardContainer>
  )
}
