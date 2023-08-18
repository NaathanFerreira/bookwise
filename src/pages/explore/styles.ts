import { styled } from '@/styles'

export const ExplorePageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const ExplorePageHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

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

export const SearchInputContainer = styled('div', {
  position: 'relative',

  maxWidth: '433px',
  width: '100%',
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
