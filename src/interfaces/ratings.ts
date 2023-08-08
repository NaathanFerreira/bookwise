import { Prisma } from '@prisma/client'

export type RatingWithBook = Prisma.RatingGetPayload<{
  include: {
    book: true
  }
}>

export type RatingWithBookAndUser = Prisma.RatingGetPayload<{
  include: {
    book: true
    user: true
  }
}>

export interface UserLatestRatingApiResponse {
  rating: RatingWithBook
}

export interface RatingsApiResponse {
  ratings: RatingWithBookAndUser[]
}
