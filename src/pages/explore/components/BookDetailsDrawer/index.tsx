import * as Dialog from '@radix-ui/react-dialog'
import {
  About,
  AboutItem,
  Book,
  BookDetail,
  BookDetailsDrawerContainer,
  BookDetailsDrawerContent,
  BookInfo,
  BookReviews,
  BookReviewsTitle,
  DrawerCloseButton,
  Overlay,
  Rating,
} from './styles'
import BookImageExample from '../../../../assets/book-example3.png'
import { AiOutlineClose } from 'react-icons/ai'
import Image from 'next/image'
import StarsRating from '@/components/StarsRating'
import { BsBookmark } from 'react-icons/bs'
import { FiBookOpen } from 'react-icons/fi'
import BookReviewCard from '../BookReviewCard'

export default function BookDetailsDrawer() {
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
                  <StarsRating />
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
              <button>Rate</button>
            </BookReviewsTitle>
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
