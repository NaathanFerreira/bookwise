import Image from 'next/image'
import {
  About,
  AboutItem,
  Book,
  BookDetailContainer,
  BookInfo,
  RatingContainer,
} from './styles'
import StarsRating from '@/components/StarsRating'
import { BsBookmark } from 'react-icons/bs'
import { FiBookOpen } from 'react-icons/fi'
import { BookDetails } from '@/interfaces/books'

interface BookDetailsProps {
  book: BookDetails
}

export function BookDetail({ book }: BookDetailsProps) {
  return (
    <>
      <BookDetailContainer>
        <Book>
          <Image
            quality={100}
            src={book.cover_url ?? ''}
            width={172}
            height={242}
            alt=" Book cover image "
          />
          <BookInfo>
            <label>
              <h1>{book.name}</h1>
              <span>{book.author}</span>
            </label>
            <RatingContainer>
              <StarsRating rate={book.avgRating ?? 0} />
              <span>{book.ratings.length} reviews</span>
            </RatingContainer>
          </BookInfo>
        </Book>
        <About>
          <AboutItem>
            <BsBookmark />
            <div>
              <span>Category</span>
              <h5>
                {book.categories
                  .map(({ category }) => category.name)
                  .join(', ')}
              </h5>
            </div>
          </AboutItem>
          <AboutItem>
            <FiBookOpen />
            <div>
              <span>Pages</span>
              <h5>{book.total_pages}</h5>
            </div>
          </AboutItem>
        </About>
      </BookDetailContainer>
    </>
  )
}
