import { BookCardContainer, BookCardContent } from './styles'
import BookImageExample from '../../../../assets/book-example2.png'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'

export default function BookCard() {
  return (
    <BookCardContainer>
      <Image
        src={BookImageExample.src}
        width={64}
        height={94}
        alt=" Book cover image "
      />
      <BookCardContent>
        <label>
          <h1>A revolução dos bichos</h1>
          <span>George Orwell</span>
        </label>
        <StarsRating />
      </BookCardContent>
    </BookCardContainer>
  )
}
