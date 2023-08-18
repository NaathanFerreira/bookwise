import { styled } from '@/styles'
import Link from 'next/link'

export const LastReadCardContainer = styled(Link, {
  textDecoration: 'none',
  width: '608px',
  height: '198px',
  background: '$gray600',

  padding: '$6',
  borderRadius: '8px',

  display: 'flex',
  gap: '$4',
})

export const LastReadCardHeader = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const ContentWrapper = styled('div', {
  flex: 1,
  width: '100%',
})

export const LastReadCardContent = styled('div', {
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'space-between',

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

  p: {
    marginTop: '$6',
    fontSize: '$sm',
    color: '$gray300',
    lineHeight: '$base',
    fontWeight: '$regular',
  },
})
