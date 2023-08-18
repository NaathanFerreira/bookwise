import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import {
  BookDetailsDrawerContainer,
  BookDetailsDrawerContent,
  BookReviews,
  BookReviewsTitle,
  DrawerCloseButton,
  Overlay,
} from './styles'
import { AiOutlineClose } from 'react-icons/ai'
import BookReviewCard from '../BookReviewCard'
import { useSession } from 'next-auth/react'
import LoginModal from '@/components/LoginModal'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { BookDetail } from '../BookDetail'
import { BookDetailsApiResponse } from '@/interfaces/books'
import { WriteReview } from '../WriteReview'

export default function BookDetailsDrawer() {
  const [isUserWritingReview, setIsUserWritingReview] = useState(false)

  const session = useSession()
  const router = useRouter()
  const bookId = router.query.bookId

  const { data: book, refetch } = useQuery(
    ['bookDetails', bookId],
    async () => {
      const response = await api.get<BookDetailsApiResponse>(
        `/books/details/${bookId}`,
      )
      return response.data.book
    },
  )

  const user = session.data?.user
  const isUserSignedIn = session.status === 'authenticated'

  const RatingWrapper = isUserSignedIn ? Fragment : LoginModal

  const userAlreadyRated = book?.ratings?.some((rating) => {
    return rating.user_id === user?.id
  })

  const userCanRate = !userAlreadyRated

  function handleRateBook() {
    if (!isUserSignedIn) return

    setIsUserWritingReview(true)
  }

  if (!bookId || !book) return null

  return (
    <Dialog.Portal>
      <Overlay />
      <BookDetailsDrawerContainer>
        <BookDetailsDrawerContent>
          <DrawerCloseButton>
            <AiOutlineClose />
          </DrawerCloseButton>
          <BookDetail book={book} />
          <BookReviews>
            <BookReviewsTitle>
              <span>Reviews</span>
              {userCanRate && (
                <RatingWrapper>
                  <button onClick={handleRateBook}>Rate</button>
                </RatingWrapper>
              )}
            </BookReviewsTitle>
            {isUserWritingReview && (
              <WriteReview
                setIsUserWritingReview={setIsUserWritingReview}
                onSubmitReview={refetch}
              />
            )}
            {book?.ratings.map((rating) => {
              return <BookReviewCard key={rating.id} rating={rating} />
            })}
          </BookReviews>
        </BookDetailsDrawerContent>
      </BookDetailsDrawerContainer>
    </Dialog.Portal>
  )
}
