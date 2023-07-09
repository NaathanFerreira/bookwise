import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { Rating } from '@smastrom/react-rating'
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
  ErrorMessage,
  Overlay,
  RatingContainer,
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
import StarsRating, { startsRatingStyles } from '@/components/StarsRating'
import { BsBookmark } from 'react-icons/bs'
import { FiBookOpen } from 'react-icons/fi'
import BookReviewCard from '../BookReviewCard'
import { useSession } from 'next-auth/react'
import LoginModal from '@/components/LoginModal'
import { useQuery } from 'react-query'
import { api } from '@/lib/axios'
import { StarsRatingContainer } from '@/components/StarsRating/styles'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, Controller } from 'react-hook-form'

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

const rateFormSchema = z.object({
  rate: z.number(),
  comment: z
    .string()
    .min(10, { message: 'Rate comment must have at least 10 characters' }),
})

type rateFormData = z.infer<typeof rateFormSchema>

export default function BookDetailsDrawer() {
  const [isUserWritingReview, setIsUserWritingReview] = useState(false)

  const session = useSession()
  const router = useRouter()
  const bookId = router.query.bookId

  const { data: book, refetch } = useQuery<BookDetails>(
    ['bookDetails', bookId],
    async () => {
      const response = await api.get<BookDetailsApiResponse>(
        `/books/details/${bookId}`,
      )
      return response.data.book
    },
  )

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<rateFormData>({
    resolver: zodResolver(rateFormSchema),
  })

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

  async function onSubmitReview(data: rateFormData) {
    const { comment, rate } = data
    await api.post(`/books/${bookId}/rate`, {
      description: comment,
      rate,
    })
    setIsUserWritingReview(false)
    reset()
    refetch()
  }

  if (!bookId) return null

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
                <RatingContainer>
                  <StarsRating rate={book?.avgRating ?? 0} />
                  <span>{book?.ratings.length} reviews</span>
                </RatingContainer>
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
              <WriteReviewContainer onSubmit={handleSubmit(onSubmitReview)}>
                <WriteReviewHeader>
                  <User>
                    <Image
                      src={user?.avatar_url ?? ''}
                      alt=" Profile avatar image "
                      width={40}
                      height={40}
                    />
                    <h1>{user?.name}</h1>
                  </User>
                  <StarsRatingContainer>
                    <Controller
                      control={control}
                      name="rate"
                      render={({ field }) => {
                        return (
                          <Rating
                            value={field.value}
                            itemStyles={startsRatingStyles}
                            onChange={field.onChange}
                          />
                        )
                      }}
                    />
                  </StarsRatingContainer>
                </WriteReviewHeader>
                <WriteReviewTextArea
                  placeholder="Write your review"
                  {...register('comment')}
                />
                {errors.comment && (
                  <ErrorMessage>{errors.comment.message}</ErrorMessage>
                )}
                <WriteReviewActions>
                  <ActionsButtonContainer>
                    <CancelReviewButton
                      onClick={() => setIsUserWritingReview(false)}
                    >
                      <AiOutlineClose />
                    </CancelReviewButton>
                    <SubmitReviewButton type="submit">
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
