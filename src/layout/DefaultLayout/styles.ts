import { styled } from '@/styles'

export const DefaultLayoutContainer = styled('div', {
  height: '100%',
  display: 'flex',
  gap: '96px',
})

export const MainContent = styled('div', {
  flex: '1',
  padding: '$10',
  overflowY: 'auto',
})
