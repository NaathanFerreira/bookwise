import { styled } from '@/styles'
import Link from 'next/link'

export const BookCardContainer = styled(Link, {
  textDecoration: 'none',
  width: '324px',
  height: '126px',
  borderRadius: '8px',

  overflow: 'hidden',
  position: 'relative',

  background: '$gray700',

  padding: '$4 $5',

  display: 'flex',
  gap: '$4',
})

export const BookCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  h1: {
    color: '$gray100',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$md',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 2,
    '-webkit-box-orient': 'vertical',
  },

  span: {
    color: '$gray400',
    fontWeight: '$regular',
    lineHeight: '$base',
    fontSize: '$sm',
  },
})
