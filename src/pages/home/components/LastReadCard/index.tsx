import Image from 'next/image'
import BookImageExample from '../../../../assets/book-example3.png'
import {
  LastReadCardContainer,
  LastReadCardContent,
  LastReadCardHeader,
} from './styles'
import StarsRating from '@/components/StarsRating'

export default function LastReadCard() {
  return (
    <LastReadCardContainer>
      <Image
        src={BookImageExample.src}
        width={108}
        height={152}
        alt=" Book cover image "
      />
      <div>
        <LastReadCardHeader>
          <span>2 days ago</span>
          <StarsRating rate={2} />
        </LastReadCardHeader>
        <LastReadCardContent>
          <label>
            <h1>Entendendo Algoritmos</h1>
            <span>Aditya Bhargava</span>
          </label>

          <p>
            Nec tempor nunc in egestas. Euismod nisi eleifend at et in sagittis.
            Penatibus id vestibulum imperdiet a at imperdiet lectu...
          </p>
        </LastReadCardContent>
      </div>
    </LastReadCardContainer>
  )
}
