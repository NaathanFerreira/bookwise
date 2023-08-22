import DefaultLayout from '@/layout/DefaultLayout'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { BsBookmark, BsPerson, BsPersonLinesFill } from 'react-icons/bs'
import { IoLibrary } from 'react-icons/io5'
import {
  AnalyticItem,
  BackButton,
  Divider,
  ProfileAnalytics,
  ProfileInfos,
  ProfileInfosHeader,
  ProfilePageContainer,
  ProfilePageContent,
  RatedBooksList,
  SearchInputContainer,
} from './styles'
import { Rating, Book, CategoriesOnBooks, Category } from '@prisma/client'
import RatedBookCard from './components/RatedBookCard'
import Image from 'next/image'
import { FiBookOpen } from 'react-icons/fi'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import { IoIosArrowBack } from 'react-icons/io'
import { api } from '@/lib/axios'
import { useQuery } from 'react-query'
import { formatDistanceDate } from '@/utils/format-distance-date'
import { useState } from 'react'
import { NextSeo } from 'next-seo'

export type ProfileRating = Rating & {
  book: Book & {
    categories: CategoriesOnBooks &
      {
        category: Category
      }[]
  }
}

export type ProfileData = {
  ratings: ProfileRating[]
  user: {
    avatar_url: string
    name: string
    member_since: string
  }
  readPages: number
  ratedBooks: number
  readAuthors: number
  mostReadCategory?: string
}

interface ProfileApiResponse {
  profile: ProfileData
}

interface ProfileProps {
  userId: string
}

export default function Profile({ userId }: ProfileProps) {
  const [searchRating, setSearchRating] = useState('')

  const session = useSession()
  const isLoggedUserProfilePage = userId === session.data?.user.id

  const { data: profile } = useQuery<ProfileData>(
    ['profile', userId],
    async () => {
      const response = await api.get<ProfileApiResponse>(`/profile/${userId}`)
      return response.data.profile
    },
  )

  const filteredUserRatings = profile?.ratings.filter((rating) => {
    return rating.book.name
      .toLowerCase()
      .includes(searchRating.toLocaleLowerCase())
  })
  return (
    <>
    <NextSeo
      title="BookWise - Profile"
    />
    <DefaultLayout>
      <ProfilePageContainer>
        {isLoggedUserProfilePage ? (
          <h1>
            <BsPerson /> Profile
          </h1>
        ) : (
          <BackButton href="/home">
            <IoIosArrowBack /> Back
          </BackButton>
        )}

        <ProfilePageContent>
          <div>
            <SearchInputContainer>
              <input
                type="text"
                placeholder="Search rated book"
                value={searchRating}
                onChange={({ target }) => setSearchRating(target.value)}
              />
              <HiMagnifyingGlass />
            </SearchInputContainer>
            <RatedBooksList>
              {filteredUserRatings?.map((rate) => {
                return (
                  <div key={rate.id}>
                    <h5>{formatDistanceDate(rate.created_at.toString())}</h5>
                    <RatedBookCard
                      coverImageUrl={rate.book.cover_url}
                      title={rate.book.name}
                      author={rate.book.author}
                      rate={rate.rate}
                      comment={rate.description}
                    />
                  </div>
                )
              })}
            </RatedBooksList>
          </div>
          <ProfileInfos>
            <ProfileInfosHeader>
              <Image
                src={profile?.user.avatar_url ?? ''}
                alt=" Profile avatar image "
                width={72}
                height={72}
              />
              <label>
                <h1>{profile?.user.name}</h1>
                <span>
                  member since {profile?.user.member_since.split('-')[0]}
                </span>
              </label>
            </ProfileInfosHeader>
            <Divider />
            <ProfileAnalytics>
              <AnalyticItem>
                <FiBookOpen />
                <label>
                  <h1>{profile?.readPages}</h1>
                  <span>Pages read</span>
                </label>
              </AnalyticItem>
              <AnalyticItem>
                <IoLibrary />
                <label>
                  <h1>{profile?.ratedBooks}</h1>
                  <span>Rated books</span>
                </label>
              </AnalyticItem>
              <AnalyticItem>
                <BsPersonLinesFill />
                <label>
                  <h1>{profile?.readAuthors}</h1>
                  <span>Authors read</span>
                </label>
              </AnalyticItem>
              <AnalyticItem>
                <BsBookmark />
                <label>
                  <h1>{profile?.mostReadCategory ?? 'None'}</h1>
                  <span>most read category</span>
                </label>
              </AnalyticItem>
            </ProfileAnalytics>
          </ProfileInfos>
        </ProfilePageContent>
      </ProfilePageContainer>
    </DefaultLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { userId: string }> = async ({
  params,
}) => {
  const userId = String(params?.userId)

  return {
    props: {
      userId,
    },
  }
}
