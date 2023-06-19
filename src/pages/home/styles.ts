import { styled } from '@/styles'

export const HomePageContainer = styled('main', {
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

export const HomeContent = styled('div', {
  marginTop: '$10',

  display: 'grid',
  gridTemplateColumns: '2fr 1fr',
  gap: '$10',
})

export const LastReadBookContainer = styled('div', {
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

export const RecentReviewsList = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',

  h5: {
    marginTop: '$6',

    color: '$gray100',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

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
