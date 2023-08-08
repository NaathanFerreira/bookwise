import { UserLatestRatingApiResponse } from '@/interfaces/ratings'
import { api } from '@/lib/axios'
import { useSession } from 'next-auth/react'
import { useQuery } from 'react-query'
import { LastReadBookContainer } from './styles'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import LastReadCard from '../LastReadCard'

export function LastReadSection() {
  const session = useSession()

  const isUserLoggedIn = session.status === 'authenticated'
  const userId = session.data?.user.id

  const { data: userLatestRating } = useQuery('userLatestRating', async () => {
    const response = await api.get<UserLatestRatingApiResponse>(
      '/ratings/user-latest',
    )
    return response.data.rating
  })

  return (
    <>
      {isUserLoggedIn && (
        <LastReadBookContainer>
          <span>
            <h5>Your last read</h5>
            <Link href={`/profile/${userId}`}>
              View all <IoIosArrowForward />
            </Link>
          </span>
          {userLatestRating && <LastReadCard rating={userLatestRating} />}
        </LastReadBookContainer>
      )}
    </>
  )
}
