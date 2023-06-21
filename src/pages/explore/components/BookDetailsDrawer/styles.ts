import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const BookDetailsDrawerContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  width: '640px',
  background: '$gray800',
  boxShadow: '-4px 0px 30px rgba(0, 0, 0, 0.5)',
  overflowY: 'auto',
})

export const DrawerCloseButton = styled(Dialog.Close, {
  background: 'none',
  border: 'none',
  color: '$gray500',
  position: 'absolute',
  top: '$8',
  right: '$8',

  svg: {
    fontSize: '$lg',
    color: '$gray400',
  },
})

export const BookDetailsDrawerContent = styled('div', {
  heigh: '100%',
  overflowY: 'auto',

  padding: '$8',
  paddingTop: '60px',

  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const BookDetail = styled('div', {
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

export const Rating = styled('div', {
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

export const BookReviews = styled('div', {
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',

  gap: '$4',
})

export const BookReviewsTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  span: {
    fontSize: '$sm',
    color: '$gray200',
    fontWeight: '$regular',
  },

  button: {
    background: 'transparent',
    border: 'none',

    fontSize: '$md',
    fontWeight: '$bold',
    color: '$purple100',
  },
})
