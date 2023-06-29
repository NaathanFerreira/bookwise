import { BookCardContainer, BookCardContent } from './styles'
import BookImageExample from '../../../../assets/book-example2.png'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'
import * as Dialog from '@radix-ui/react-dialog'
import BookDetailsDrawer from '../BookDetailsDrawer'

export default function BookCard() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BookCardContainer>
          <Image
            quality={100}
            src={BookImageExample.src}
            width={108}
            height={152}
            alt=" Book cover image "
          />
          <BookCardContent>
            <label>
              <h1>A revolução dos bichos</h1>
              <span>George Orwell</span>
            </label>
            <StarsRating rate={2} />
          </BookCardContent>
        </BookCardContainer>
      </Dialog.Trigger>
      <BookDetailsDrawer />
    </Dialog.Root>
  )
}
