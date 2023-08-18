import { styled } from '@/styles'

export const LastReadBookContainer = styled('div', {
  textDecoration: 'none',
  maxWidth: '608px',

  span: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',

    marginBottom: '$3',
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
