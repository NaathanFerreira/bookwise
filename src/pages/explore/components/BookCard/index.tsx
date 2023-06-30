import { BookCardContainer, BookCardContent } from './styles'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'
import * as Dialog from '@radix-ui/react-dialog'
import BookDetailsDrawer from '../BookDetailsDrawer'

interface BookCardProps {
  coverImageUrl: string
  title: string
  author: string
  rate: number
}

export default function BookCard({
  coverImageUrl,
  title,
  author,
  rate,
}: BookCardProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BookCardContainer>
          <Image
            quality={100}
            src={coverImageUrl}
            width={108}
            height={152}
            alt=" Book cover image "
          />
          <BookCardContent>
            <label>
              <h1>{title}</h1>
              <span>{author}</span>
            </label>
            <StarsRating rate={rate} />
          </BookCardContent>
        </BookCardContainer>
      </Dialog.Trigger>
      <BookDetailsDrawer />
    </Dialog.Root>
  )
}
