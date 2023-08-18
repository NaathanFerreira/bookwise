import { Book, CategoriesOnBooks, Category } from '@prisma/client'
import { RatingWithAuthor } from './ratings'

export type BooksWithAvgRating = {
  ratings: number
  avgRating: number
  alreadyRead: boolean
  id: string
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
  created_at: Date
}

type BookWithAvgRating = Book & {
  avgRating: number
  alreadyRead: boolean
}

export type BookDetails = BookWithAvgRating & {
  ratings: RatingWithAuthor[]
  categories: (CategoriesOnBooks & {
    category: Category
  })[]
}

export interface MostPopularBooksApiResponse {
  mostPopularBooks: BookWithAvgRating[]
}

export interface BooksCategoriesApiResponse {
  categories: Category[]
}

export interface BooksApiReponse {
  books: BooksWithAvgRating[]
}

export interface BookDetailsApiResponse {
  book: BookDetails
}
