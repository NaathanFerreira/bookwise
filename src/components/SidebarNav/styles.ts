import { styled } from '@/styles'
import SidebarBackground from '../../assets/sidebar-background.png'
import Link from 'next/link'

export const SidebarNavContainer = styled('aside', {
  position: 'relative',
  margin: '$4',

  width: '100%',
  maxWidth: '232px',

  backgroundImage: `url(${SidebarBackground.src})`,

  borderRadius: '$lg',
  padding: '$8',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$10',
})

export const NavigationOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const NavigationLink = styled(Link, {
  position: 'relative',
  display: 'flex',
  gap: '$3',
  alignItems: 'center',
  textDecoration: 'none',

  color: '$gray400',
  fontWeight: '$regular',
  fontSize: '$md',
  lineHeight: '$base',

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },

  variants: {
    active: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',

        '&:before': {
          content: '',
          position: 'absolute',
          left: '-24px',
          width: '4px',
          height: '100%',
          background: '$gradient-vertical',
          borderRadius: '12px',
        },
      },
    },
  },
})

export const LoginButton = styled('button', {
  position: 'absolute',
  bottom: '$10',

  border: 'none',
  background: 'transparent',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  color: '$gray200',
  fontSize: '$md',
  fontWeight: 'bold',

  svg: {
    color: '$green100',
    fontSize: '$lg',
    fontWeight: '$bold',
  },
})

export const LogoutButton = styled('button', {
  position: 'absolute',
  bottom: '$10',

  border: 'none',
  background: 'transparent',

  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  color: '$gray200',
  fontSize: '$md',
  fontWeight: 'bold',

  svg: {
    color: '$red100',
    fontSize: '$lg',
    fontWeight: '$bold',
  },

  img: {
    border: '1px',
    borderColor: '$gradient-vertical',

    borderRadius: '$full',
  },
})
