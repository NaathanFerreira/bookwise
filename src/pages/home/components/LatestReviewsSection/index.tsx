import { useQuery } from 'react-query'
import ReviewCard from '../ReviewCard'
import { LatestReviewsList } from './styles'
import { api } from '@/lib/axios'
import { RatingsApiResponse } from '@/interfaces/ratings'

export function LatestReviewsSection() {
  const { data: ratings } = useQuery(['ratings'], async () => {
    const response = await api.get<RatingsApiResponse>('/ratings')
    return response.data.ratings
  })

  return (
    <>
      <LatestReviewsList>
        <h5>Most recent reviews</h5>
        {ratings?.map((rating) => {
          return <ReviewCard key={rating.id} rating={rating} />
        })}
      </LatestReviewsList>
    </>
  )
}
