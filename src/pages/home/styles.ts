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
