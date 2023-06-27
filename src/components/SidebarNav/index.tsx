import Image from 'next/image'
import Logo from '../../assets/logo.png'
import { BsGraphUpArrow, BsBinoculars, BsPerson } from 'react-icons/bs'
import { FiLogIn, FiLogOut } from 'react-icons/fi'
import {
  LoginButton,
  LogoutButton,
  NavigationLink,
  NavigationOptions,
  SidebarNavContainer,
} from './styles'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

export default function SidebarNav() {
  const router = useRouter()
  const { pathname } = router

  const session = useSession()

  console.log(session)

  const isUserSignedIn = session.status === 'authenticated'
  const user = session.data?.user!

  async function handleLogout() {
    await signOut()
  }

  async function handleLogin() {
    await router.push('/login')
  }

  return (
    <SidebarNavContainer>
      <Image
        width={128}
        id="wisebook-logo"
        quality={100}
        src={Logo}
        priority
        alt="WiseBook logo "
      />
      <NavigationOptions>
        <NavigationLink href="/home" active={pathname === '/home'}>
          <BsGraphUpArrow /> Home
        </NavigationLink>
        <NavigationLink href="/explore" active={pathname === '/explore'}>
          <BsBinoculars /> Explore
        </NavigationLink>
        {isUserSignedIn && (
          <NavigationLink
            href={`/profile/${session.data.user.id}`}
            active={pathname.startsWith('/profile')}
          >
            <BsPerson /> Profile
          </NavigationLink>
        )}
      </NavigationOptions>
      {isUserSignedIn ? (
        <LogoutButton onClick={handleLogout}>
          <Image
            src={user.avatar_url}
            width={32}
            height={32}
            alt="User profile avatar"
          />
          {user.name}
          <FiLogOut />
        </LogoutButton>
      ) : (
        <LoginButton onClick={handleLogin}>
          Login <FiLogIn />
        </LoginButton>
      )}
    </SidebarNavContainer>
  )
}
