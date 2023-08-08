import { styled } from '@/styles'

export const LoginPageContainer = styled('div', {
  width: '100%',
  padding: '$5',
  display: 'flex',
})

export const ImageContainer = styled('div', {
  // height: '100%',
  maxHeight: '94vh',
  borderRadius: '$lg',
  overflow: 'hidden',
  position: 'relative',

  '#wisebook-logo': {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

export const LoginActionsContainer = styled('section', {
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  gap: '$10',
})

export const WelcomeTextSection = styled('div', {
  h1: {
    color: '$gray100',
    fontWeight: '$bold',
    fontSize: '$2xl',
    lineHeight: '$short',
  },

  h5: {
    color: '$gray200',
    fontWeight: '$regular',
    fontSize: '$md',
    lineHeight: '$base',
  },
})

export const LoginOptions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export const LoginButton = styled('button', {
  background: '$gray600',

  border: 'none',
  padding: '$5 $6',
  borderRadius: '$md',

  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  color: '$gray200',
  fontSize: '$lg',
  fontWeight: '$bold',
  lineHeight: '$base',

  svg: {
    fontSize: '32px',
  },

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
