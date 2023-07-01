import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import * as Dialog from '@radix-ui/react-dialog'
import {
  About,
  AboutItem,
  ActionsButtonContainer,
  Book,
  BookDetail,
  BookDetailsDrawerContainer,
  BookDetailsDrawerContent,
  BookInfo,
  BookReviews,
  BookReviewsTitle,
  CancelReviewButton,
  DrawerCloseButton,
  Overlay,
  Rating,
  SubmitReviewButton,
  User,
  WriteReviewActions,
  WriteReviewContainer,
  WriteReviewHeader,
  WriteReviewTextArea,
} from './styles'
import {
  Book as PrismaBook,
  CategoriesOnBooks,
  Category,
  Rating as PrismaRating,
  User as PrismaUser,
} from '@prisma/client'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'
import { BsBookmark } from 'react-icons/bs'
import { FiBookOpen } from 'react-icons/fi'
import BookReviewCard from '../BookReviewCard'
import { useSession } from 'next-auth/react'
import LoginModal from '@/components/LoginModal'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'

type BookWithAvgRating = PrismaBook & {
  avgRating: number
  alreadyRead: boolean
}
type RatingWithAuthor = PrismaRating & {
  user: PrismaUser
}

type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

interface BookDetailsApiResponse {
  book: BookDetails
}

export default function BookDetailsDrawer() {
  const [isUserWritingReview, setIsUserWritingReview] = useState(false)

  const router = useRouter()
  const bookId = router.query.bookId

  const { data: book } = useQuery<BookDetails>(
    ['bookDetails', bookId],
    async () => {
      const response = await api.get<BookDetailsApiResponse>(
        `/books/details/${bookId}`,
      )
      return response.data.book
    },
  )

  const session = useSession()
  const isUserSignedIn = session.status === 'authenticated'

  const RatingWrapper = isUserSignedIn ? Fragment : LoginModal

  const userCanRate = !isUserWritingReview

  function handleRateBook() {
    if (!isUserSignedIn) return

    setIsUserWritingReview(true)
  }

  function handleSubmitReview() {
    // todo
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <BookDetailsDrawerContainer>
        <BookDetailsDrawerContent>
          <DrawerCloseButton>
            <AiOutlineClose />
          </DrawerCloseButton>
          <BookDetail>
            <Book>
              <Image
                quality={100}
                src={book?.cover_url ?? ''}
                width={172}
                height={242}
                alt=" Book cover image "
              />
              <BookInfo>
                <label>
                  <h1>{book?.name}</h1>
                  <span>{book?.author}</span>
                </label>
                <Rating>
                  <StarsRating rate={book?.avgRating ?? 0} />
                  <span>{book?.ratings.length} reviews</span>
                </Rating>
              </BookInfo>
            </Book>
            <About>
              <AboutItem>
                <BsBookmark />
                <div>
                  <span>Category</span>
                  <h5>
                    {book?.categories
                      .map(({ category }) => category.name)
                      .join(', ')}
                  </h5>
                </div>
              </AboutItem>
              <AboutItem>
                <FiBookOpen />
                <div>
                  <span>Pages</span>
                  <h5>{book?.total_pages}</h5>
                </div>
              </AboutItem>
            </About>
          </BookDetail>
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
              <WriteReviewContainer>
                <WriteReviewHeader>
                  <User>
                    <Image
                      src="https://avatars.githubusercontent.com/u/35970600?v=4"
                      alt=" Profile avatar image "
                      width={40}
                      height={40}
                    />
                    <h1>Nathan Ferreira</h1>
                  </User>
                  <StarsRating rate={3} />
                </WriteReviewHeader>
                <WriteReviewTextArea placeholder="Write your review" />
                <WriteReviewActions>
                  <ActionsButtonContainer>
                    <CancelReviewButton
                      onClick={() => setIsUserWritingReview(false)}
                    >
                      <AiOutlineClose />
                    </CancelReviewButton>
                    <SubmitReviewButton onClick={handleSubmitReview}>
                      <AiOutlineCheck />
                    </SubmitReviewButton>
                  </ActionsButtonContainer>
                </WriteReviewActions>
              </WriteReviewContainer>
            )}
            {book?.ratings.map((rating) => {
              return (
                <BookReviewCard
                  key={rating.id}
                  userImageUrl={rating.user.avatar_url ?? ''}
                  userName={rating.user.name}
                  createdAt={rating.created_at}
                  rate={rating.rate}
                  comment={rating.description}
                />
              )
            })}
          </BookReviews>
        </BookDetailsDrawerContent>
      </BookDetailsDrawerContainer>
    </Dialog.Portal>
  )
}
