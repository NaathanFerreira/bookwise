import { styled } from '@/styles'

export const FilterOptions = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  flexWrap: 'wrap',
})

export const FilterItem = styled('button', {
  background: 'transparent',

  padding: '$2 $4',
  border: '1px solid',
  borderColor: '$purple100',
  borderRadius: '$full',

  color: '$purple100',
  fontWeight: '$regular',
  fontSize: '$md',
  lineHeight: '$base',

  variants: {
    selected: {
      true: {
        background: '$purple200',
        borderColor: '$purple200',

        color: '$gray100',
      },
    },
  },
})
