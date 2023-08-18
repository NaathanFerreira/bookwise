import { styled } from '@/styles'

export const WriteReviewContainer = styled('form', {
  padding: '$8',

  display: 'flex',
  flexDirection: 'column',

  gap: '$4',

  background: '$gray700',
  borderRadius: '8px',
})

export const WriteReviewHeader = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})

export const User = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',

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
})

export const WriteReviewTextArea = styled('textarea', {
  resize: 'none',
  minHeight: '164px',

  borderRadius: '4px',
  border: '1px solid',
  borderColor: '$gray500',

  background: '$gray800',

  padding: '$2',

  color: '$gray200',
  fontSize: '$sm',

  '&:focus': {
    outline: 0,
  },
})

export const WriteReviewActions = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
})

export const ActionsButtonContainer = styled('div', {
  display: ' flex',
  gap: '$1',
})

export const CancelReviewButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$gray600',
  borderRadius: '4px',
  padding: '$2',

  border: 'none',

  svg: {
    color: '$purple100',
    fontSize: '$lg',
  },

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})

export const SubmitReviewButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  background: '$gray600',
  borderRadius: '4px',
  padding: '$2',

  border: 'none',

  svg: {
    color: '$green100',
    fontSize: '$lg',
  },

  transition: 'filter 0.2s',

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
