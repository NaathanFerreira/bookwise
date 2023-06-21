import { styled } from '@/styles'

export const BookCardContainer = styled('div', {
  cursor: 'pointer',
  height: '184px',
  borderRadius: '8px',

  background: '$gray700',

  padding: '$4 $5',

  display: 'flex',
  gap: '$4',
})

export const BookCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  label: {
    cursor: 'pointer',
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
