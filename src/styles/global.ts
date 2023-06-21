import { globalCss } from '@stitches/react'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  'body, input, button': {
    fontFamily: 'Nunito',
    fontWeight: 400,
  },

  button: {
    cursor: 'pointer',
  },

  /* width */
  '::-webkit-scrollbar': {
    width: '6px',
  },

  /* Track */
  '::-webkit-scrollbar-track': {
    background: '#181C2A',
    borderRadius: '999px',
  },

  /* Handle */
  '::-webkit-scrollbar-thumb': {
    background: '#252D4A',
    borderRadius: '999px',
  },

  /* Handle on hover */
  '::-webkit-scrollbar-thumb:hover': {
    background: '#303F73',
  },
})
