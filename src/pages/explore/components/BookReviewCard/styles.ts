import { styled } from '@/styles'

export const BookReviewCardContainer = styled('div', {
  width: '100%',
  background: '$gray700',
  borderRadius: '8px',
  padding: '$6',

  p: {
    marginTop: '$4',

    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const BookReviewCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const User = styled('div', {
  display: 'flex',
  gap: '$4',

  alignItems: 'center',

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
