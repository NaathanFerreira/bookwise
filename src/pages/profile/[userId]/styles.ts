import { styled } from '@/styles'
import Link from 'next/link'

export const ProfilePageContainer = styled('div', {
  h1: {
    display: 'flex',
    gap: '$4',
    alignItems: 'center',

    color: '$gray100',
    fontSize: '$2xl',
    fontWeight: '$bold',
    lineHeight: '$short',
  },

  svg: {
    color: '$green100',
  },
})

export const BackButton = styled(Link, {
  textDecoration: 'none',
  color: '$gray200',
  fontSize: '$md',
  fontWeight: '$bold',
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  svg: {
    color: '$gray200',
    fontSize: '$lg',
  },
})

export const ProfilePageContent = styled('div', {
  marginTop: '$10',

  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '$10',
})

export const SearchInputContainer = styled('div', {
  position: 'relative',

  maxWidth: '624px',
  height: '48px',

  input: {
    width: '100%',
    height: '100%',

    background: '$gray800',
    border: '1px solid',
    borderColor: '$gray500',
    borderRadius: '$sm',

    padding: '$5',

    color: '$gray400',
    fontSize: '$sm',
    lineHeight: '$base',
    fontWeight: '$medium',

    '&:placeholder': {
      color: '$gray400',
      fontSize: '$sm',
      lineHeight: '$base',
      fontWeight: '$regular',
    },

    '&:focus': {
      outline: 0,
    },
  },

  svg: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translate(0, -50%)',

    fontSize: '$lg',
    color: '$gray500',
  },
})

export const RatedBooksList = styled('div', {
  marginTop: '$8',
  display: 'flex',
  flexDirection: 'column',

  gap: '$6',

  h5: {
    marginBottom: '$2',
    fontSize: '$sm',
    color: '$gray300',
    fontWeight: '$regular',
  },
})

export const ProfileInfos = styled('div', {
  borderLeft: '1px solid',
  borderColor: '$gray700',

  maxHeight: '555px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export const ProfileInfosHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$4',

  img: {
    borderRadius: '$full',

    border: '2px solid transparent',
    background: '$gradient-vertical',
  },

  h1: {
    color: '$gray100',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$md',
  },

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$sm',
  },
})

export const Divider = styled('div', {
  width: '32px',
  height: '4px',
  background: '$gradient-horizontal',
  borderRadius: '$full',
  margin: '$10 0',
})

export const ProfileAnalytics = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$6',
})

export const AnalyticItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  svg: {
    color: '$green100',
    fontSize: '$2xl',
  },

  h1: {
    color: '$gray100',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$md',
  },

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$sm',
  },
})
