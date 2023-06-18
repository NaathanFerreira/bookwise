import Image from 'next/image'
import LoginBgImage from '../../assets/login-bg-img.png'
import Logo from '../../assets/logo.png'
import { FcGoogle } from 'react-icons/fc'
import { BsGithub, BsFillRocketTakeoffFill } from 'react-icons/bs'
import {
  LoginPageContainer,
  ImageContainer,
  LoginActionsContainer,
  LoginButton,
  LoginOptions,
  WelcomeTextSection,
} from './styles'
import { useRouter } from 'next/router'
import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { GetServerSideProps } from 'next'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth].api'

export default function Login() {
  const router = useRouter()
  const session = useSession()

  const isUserSignedIn = session.status === 'authenticated'

  async function handleSignIn(provider: 'google' | 'gihub') {
    await signIn(provider)
  }

  useEffect(() => {
    if (isUserSignedIn) {
      router.push('/home')
    }
  }, [isUserSignedIn, router])

  return (
    <LoginPageContainer>
      <ImageContainer>
        <Image
          quality={100}
          src={LoginBgImage}
          priority
          alt="A woman lying down reading a book "
        />
        <Image
          id="wisebook-logo"
          quality={100}
          src={Logo}
          priority
          alt="WiseBook logo "
        />
      </ImageContainer>
      <LoginActionsContainer>
        <WelcomeTextSection>
          <h1>Welcome!</h1>
          <h5>Log in or access as a guest.</h5>
        </WelcomeTextSection>
        <LoginOptions>
          <LoginButton onClick={() => handleSignIn('google')}>
            <FcGoogle /> Entrar com Google
          </LoginButton>
          <LoginButton onClick={() => handleSignIn('gihub')}>
            <BsGithub /> Entrar com GitHub
          </LoginButton>
          <LoginButton onClick={() => router.push('/home')}>
            <BsFillRocketTakeoffFill /> Entrar como visitante
          </LoginButton>
        </LoginOptions>
      </LoginActionsContainer>
    </LoginPageContainer>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await getServerSession(req, res, authOptions)

  if (session) {
    return {
      redirect: {
        destination: 'home',
        permanent: false,
      },
    }
  }

  return { props: {} }
}
