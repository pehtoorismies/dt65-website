import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const breakpoints = ['576px', '768px', '992px', '1200px']

export const theme = {
  breakpoints,
  fonts: {
    body: 'Poppins, sans-serif',
    heading: 'Poppins, sans-serif',
  },
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
