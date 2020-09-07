import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const breakpoints = ['576px', '768px', '992px', '1200px']

const fontSizes = ['1.6rem', '2rem', '3rem']

Object.defineProperty(fontSizes, 'small', {
  value: fontSizes[0],
  writable: false,
})
Object.defineProperty(fontSizes, 'large', {
  value: fontSizes[2],
  writable: false,
})

export const colors = {
  pink: '#ff80ea',
}

export const text = {
  body: {
    color: 'text',
    lineHeight: 'body',
    fontFamily: 'body',
    fontSize: ['1.6rem'],
  },
  h1: {
    color: 'heading',
    lineHeight: 'heading',
    fontFamily: 'heading',
    fontSize: ['4rem', '5rem'],
  },
  h2: {
    color: 'heading',
    lineHeight: 'heading',
    fontFamily: 'heading',
    fontSize: ['2rem', '2.3rem', '3rem'],
  },
  h3: {
    color: 'heading',
    fontFamily: 'heading',
    fontSize: ['1.8rem', '2rem', '3rem'],
  },
  logo: {
    color: 'pink',
    fontSize: 'large',
    fontFamily: 'heading',
  },
}

export const theme = {
  breakpoints,
  colors,
  fonts: {
    body: `'Titillium Web', sans-serif`,
    heading: `'Titillium Web', sans-serif`,
  },
  fontSizes,
  fontWeights: {
    normal: 400,
    heading: 600,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.4,
  },
  text,
  variants: {
    nav: {
      color: 'white',
    },
  },
}

export const GlobalStyles = createGlobalStyle`
  ${reset}

  html {
    font-size: 10px;
  }
  body {
    font-family: 'Poppins', sans-serif;
    
  }
`
