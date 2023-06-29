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
import RatedBookCard from './components/RatedBookCard'
import Image from 'next/image'
import { FiBookOpen } from 'react-icons/fi'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import { IoIosArrowBack } from 'react-icons/io'

interface ProfileProps {
  userId: string
}

export default function Profile({ userId }: ProfileProps) {
  const session = useSession()
  const isLoggedUserProfilePage = userId === session.data?.user.id

  return (
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
              <input type="text" placeholder="Search rated book" />
              <HiMagnifyingGlass />
            </SearchInputContainer>
            <RatedBooksList>
              <div>
                <h5>2 days ago</h5>
                <RatedBookCard />
              </div>
              <div>
                <h5>4 months ago</h5>
                <RatedBookCard />
              </div>
              <div>
                <h5>5 months ago</h5>
                <RatedBookCard />
              </div>
            </RatedBooksList>
          </div>
          <ProfileInfos>
            <ProfileInfosHeader>
              <Image
                src="https://avatars.githubusercontent.com/u/35970600?v=4"
                alt=" Profile avatar image "
                width={72}
                height={72}
              />
              <label>
                <h1>Nathan Ferreira</h1>
                <span>member since 2019</span>
              </label>
            </ProfileInfosHeader>
            <Divider />
            <ProfileAnalytics>
              <AnalyticItem>
                <FiBookOpen />
                <label>
                  <h1>3853</h1>
                  <span>Pages read</span>
                </label>
              </AnalyticItem>
              <AnalyticItem>
                <IoLibrary />
                <label>
                  <h1>10</h1>
                  <span>Rated books</span>
                </label>
              </AnalyticItem>
              <AnalyticItem>
                <BsPersonLinesFill />
                <label>
                  <h1>8</h1>
                  <span>Authors read</span>
                </label>
              </AnalyticItem>
              <AnalyticItem>
                <BsBookmark />
                <label>
                  <h1>Fiction</h1>
                  <span>most read category</span>
                </label>
              </AnalyticItem>
            </ProfileAnalytics>
          </ProfileInfos>
        </ProfilePageContent>
      </ProfilePageContainer>
    </DefaultLayout>
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
