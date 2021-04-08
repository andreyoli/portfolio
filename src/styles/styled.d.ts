import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string

    colors: {
      background: string
      text: string
      primary: string
      gradient: string
    }

    fontSize: {
      normal: string
      medium: string
      large: string
    }

    marginSize: {
      small: string
      medium: string
      large: string
    }

    breakpoints: {
      mobileS: string
      mobileM: string
      mobileL: string
      tablet: string
      desktop: string
    }
  }
}
