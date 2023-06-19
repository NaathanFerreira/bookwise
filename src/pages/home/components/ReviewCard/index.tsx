import Image from 'next/image'
import BookImageExample from '../../../../assets/book-example.png'
import {
  BookInformations,
  BookTitle,
  ReviewCardContainer,
  ReviewCardContent,
  ReviewCardHeader,
} from './styles'
import StarsRating from '@/components/StarsRating'

export default function ReviewCard() {
  return (
    <ReviewCardContainer>
      <ReviewCardHeader>
        <label>
          <Image
            src="https://avatars.githubusercontent.com/u/35970600?v=4"
            alt=" Review owner avatar image "
            width={40}
            height={40}
          />
          <div>
            <h1>Nathan Ferreira</h1>
            <span>Hoje</span>
          </div>
        </label>
        <StarsRating />
      </ReviewCardHeader>
      <ReviewCardContent>
        <Image
          src={BookImageExample.src}
          alt=" Book cover image "
          width={108}
          height={152}
        />
        <BookInformations>
          <BookTitle>
            <h1>O Hobbit</h1>
            <span>J.R.R. Tolkien</span>
          </BookTitle>
          <p>
            Semper et sapien proin vitae nisi. Feugiat neque integer donec et
            aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo
            a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed
            vulputate massa velit nibha
          </p>
        </BookInformations>
      </ReviewCardContent>
    </ReviewCardContainer>
  )
}
