import { styled } from '@/styles'

export const LatestReviewsList = styled('section', {
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
