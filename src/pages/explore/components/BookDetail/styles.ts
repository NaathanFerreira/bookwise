import { styled } from '@/styles'

export const BookDetailContainer = styled('div', {
  padding: '$8',
  background: '$gray700',
  borderRadius: '10px',

  height: '414px',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  gap: '$8',
})

export const Book = styled('div', {
  display: 'flex',
  gap: '$6',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

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
    fontSize: '$md',
  },
})

export const RatingContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$sm',
  },
})

export const About = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  padding: '$8 0',

  borderTop: '1px solid',
  borderColor: '$gray600',
})

export const AboutItem = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$4',

  svg: {
    fontSize: '$lg',
    color: '$green100',
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
  },

  span: {
    color: '$gray300',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$sm',
  },

  h5: {
    color: '$gray200',
    fontWeight: '$bold',
    lineHeight: '$base',
    fontSize: '$md',
  },
})
