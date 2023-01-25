import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    palette: {
      primary: string;
      secondary: string;
      terciary: string;
    };
  }
}
