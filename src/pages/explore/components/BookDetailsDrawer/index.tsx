import { Fragment, useState } from 'react'
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
import BookImageExample from '../../../../assets/book-example3.png'
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'
import { BsBookmark } from 'react-icons/bs'
import { FiBookOpen } from 'react-icons/fi'
import BookReviewCard from '../BookReviewCard'
import { useSession } from 'next-auth/react'
import LoginModal from '@/components/LoginModal'

export default function BookDetailsDrawer() {
  const [isUserWritingReview, setIsUserWritingReview] = useState(false)

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
                src={BookImageExample.src}
                width={172}
                height={242}
                alt=" Book cover image "
              />
              <BookInfo>
                <label>
                  <h1>Algoritmos</h1>
                  <span>Zeno Rocha</span>
                </label>
                <Rating>
                  <StarsRating rate={3} />
                  <span>2 reviews</span>
                </Rating>
              </BookInfo>
            </Book>
            <About>
              <AboutItem>
                <BsBookmark />
                <div>
                  <span>Category</span>
                  <h5>Tech, education</h5>
                </div>
              </AboutItem>
              <AboutItem>
                <FiBookOpen />
                <div>
                  <span>Pages</span>
                  <h5>160</h5>
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
            <BookReviewCard />
            <BookReviewCard />
            <BookReviewCard />
            <BookReviewCard />
          </BookReviews>
        </BookDetailsDrawerContent>
      </BookDetailsDrawerContainer>
    </Dialog.Portal>
  )
}
