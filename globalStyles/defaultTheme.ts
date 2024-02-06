import { ThemeDTO } from 'styled-components'

export const defaultTheme: ThemeDTO = {
  colors: {
    main: {
      darkBlue: "#003366",
      darkGray: "#282828",
      lightBlue: "#07BEB8",
      white: "#F8F8F8"
    },
    secondary: {
      alert: "#C0392B",
      warning: "#F1C40F",
      success: "#229954",
      disabled: "#A4A4A4"
    }
  },
  fonts: {
    primary: 'Montserrat, sans-serif'
  }
}