// File created to create the shape of the style component theme
import 'styled-components';

declare module 'styled-components' {
  export interface ThemeDTO {
    fonts: {
      primary: string;
    }

    colors: {
      main: {
        lightBlue: string;
        darkBlue: string;
        darkGray: string;
        white: string;
      }
      secondary: {
        alert: string;
        warning: string;
        success: string;
        disabled: string;
      };
    };
  }
}