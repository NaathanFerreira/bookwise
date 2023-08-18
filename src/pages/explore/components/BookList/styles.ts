import { styled } from '@/styles'

export const BookListContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
  gap: '$4',

  a: {
    textDecoration: 'none',
  },

  '@bp3': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@bp2': {
    gridTemplateColumns: '1fr 1fr',
  },
})
