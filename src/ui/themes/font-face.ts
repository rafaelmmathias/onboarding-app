import { createGlobalStyle } from "styled-components";

const FontStyle = createGlobalStyle`

body {
  font-family: '${({ theme }) => theme.fontFamily}', sans-serif;
  background-color: ${({ theme }) => theme.palette.bgBody};
}
`;

export default FontStyle;
