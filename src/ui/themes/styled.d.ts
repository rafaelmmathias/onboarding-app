import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fontFamily: string;
    palette: {
      primary: string; // top header and step content bg-color
      secondary: string; // buttons and step marker bg-color
      terciary: string; // header steps bg-color
      bgBody: string; // bg of the body
      fontColor: string; // font color
    };
  }
}
