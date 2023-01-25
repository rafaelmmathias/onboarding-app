import { createGlobalStyle } from "styled-components";

const FontStyle = createGlobalStyle`

body {
  font-family: '${({ theme }) => theme.fontFamily}', sans-serif;
}
`;

export default FontStyle;
