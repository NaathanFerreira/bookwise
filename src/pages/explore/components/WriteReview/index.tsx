import Image from 'next/image'
import {
  ActionsButtonContainer,
  CancelReviewButton,
  SubmitReviewButton,
  User,
  WriteReviewActions,
  WriteReviewContainer,
  WriteReviewHeader,
  WriteReviewTextArea,
} from './styles'
import { StarsRatingContainer } from '@/components/StarsRating/styles'
import { Rating } from '@smastrom/react-rating'
import { startsRatingStyles } from '@/components/StarsRating'
import { ErrorMessage } from '../BookDetailsDrawer/styles'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '@/lib/axios'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'

const rateFormSchema = z.object({
  rate: z.number(),
  comment: z
    .string()
    .min(10, { message: 'Rate comment must have at least 10 characters' }),
})

type rateFormData = z.infer<typeof rateFormSchema>

interface WriteReviewProps {
  setIsUserWritingReview: (value: boolean) => void
  onSubmitReview: Function
}

export function WriteReview({
  setIsUserWritingReview,
  onSubmitReview,
}: WriteReviewProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<rateFormData>({
    resolver: zodResolver(rateFormSchema),
  })

  const session = useSession()
  const router = useRouter()

  const user = session.data?.user
  const bookId = router.query.bookId

  async function handleSubmitReview(data: rateFormData) {
    const { comment, rate } = data
    await api.post(`/books/${bookId}/rate`, {
      description: comment,
      rate,
    })
    setIsUserWritingReview(false)
    reset()
    onSubmitReview()
  }

  return (
    <WriteReviewContainer onSubmit={handleSubmit(handleSubmitReview)}>
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
      {errors.comment && <ErrorMessage>{errors.comment.message}</ErrorMessage>}
      <WriteReviewActions>
        <ActionsButtonContainer>
          <CancelReviewButton onClick={() => setIsUserWritingReview(false)}>
            <AiOutlineClose />
          </CancelReviewButton>
          <SubmitReviewButton type="submit">
            <AiOutlineCheck />
          </SubmitReviewButton>
        </ActionsButtonContainer>
      </WriteReviewActions>
    </WriteReviewContainer>
  )
}
