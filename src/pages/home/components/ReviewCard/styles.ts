import { styled } from '@/styles'
import Link from 'next/link'

export const ReviewCardContainer = styled('div', {
  width: '608px',
  height: '280px',
  background: '$gray700',

  padding: '$6',
  borderRadius: '8px',

  display: 'flex',
  flexDirection: 'column',

  gap: '$8',
})

export const ReviewCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  a: {
    textDecoration: 'none',
    display: 'flex',
    gap: '$4',

    alignItems: 'center',
  },

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

export const ReviewCardContent = styled(Link, {
  textDecoration: 'none',
  display: 'flex',
  gap: '$4',
})

export const BookInformations = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',

  p: {
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
    fontWeight: '$regular',
  },
})

export const BookTitle = styled('div', {
  display: 'flex',
  flexDirection: 'column',

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
