export type BookWithAvgRating = {
  avgRating: number
  id: string
  created_at: Date
  name: string
  author: string
  summary: string
  cover_url: string
  total_pages: number
}

export interface MostPopularBooksApiResponse {
  mostPopularBooks: BookWithAvgRating[]
}
