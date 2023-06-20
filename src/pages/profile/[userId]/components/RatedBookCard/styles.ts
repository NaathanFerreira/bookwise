import { styled } from '@/styles'

export const RatedBookCardContainer = styled('div', {
  width: '624px',

  padding: '$6',

  background: '$gray700',
  borderRadius: '8px',

  p: {
    marginTop: '$4',

    color: '$gray300',
    fontSize: '$sm',
    fontWeight: '$regular',
    lineHeight: '$base',
  },
})

export const RatedBookCardHeader = styled('div', {
  display: 'flex',
  gap: '$5',
})

export const RatedBookCardInfos = styled('div', {
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
    fontSize: '$sm',
  },
})
