import Image from 'next/image'
import BookImageExample from '../../../../../assets/book-example.png'
import {
  RatedBookCardContainer,
  RatedBookCardHeader,
  RatedBookCardInfos,
} from './styles'
import StarsRating from '@/components/StarsRating'

export default function RatedBookCard() {
  return (
    <RatedBookCardContainer>
      <RatedBookCardHeader>
        <Image
          src={BookImageExample.src}
          width={98}
          height={134}
          alt=" Book cover image "
        />
        <RatedBookCardInfos>
          <label>
            <h1>Entendendo Algoritmos</h1>
            <span>Adityia Bhargava</span>
          </label>
          <StarsRating rate={1} />
        </RatedBookCardInfos>
      </RatedBookCardHeader>
      <p>
        Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
        non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
        suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
        tristique pretium quam. Mollis et luctus amet sed convallis varius massa
        sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
        curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
        elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
        pellentesque.
      </p>
    </RatedBookCardContainer>
  )
}
