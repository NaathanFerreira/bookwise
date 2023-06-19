import { styled } from '@/styles'

export const LastReadCardContainer = styled('div', {
  width: '608px',
  height: '198px',
  background: '$gray600',

  padding: '$6',
  borderRadius: '8px',

  display: 'flex',
  gap: '$4',
})

export const LastReadCardHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',

  span: {
    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
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
