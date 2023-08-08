import { styled } from '@/styles'

export const PopularBooksList = styled('section', {
  maxWidth: '328px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  span: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },

  h5: {
    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    gap: '$2',

    textDecoration: 'none',
    color: '$purple100',
    fontWeight: 'bold',
    fontSize: 'sm',
    lineHeight: 'base',

    svg: {
      color: '$purple100',
    },
  },
})
