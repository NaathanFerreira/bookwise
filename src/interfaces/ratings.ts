import { Prisma, Rating, User } from '@prisma/client'

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

export type RatingWithAuthor = Rating & {
  user: User
}

export interface UserLatestRatingApiResponse {
  rating: RatingWithBook
}

export interface RatingsApiResponse {
  ratings: RatingWithBookAndUser[]
}
