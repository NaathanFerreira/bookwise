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
})
