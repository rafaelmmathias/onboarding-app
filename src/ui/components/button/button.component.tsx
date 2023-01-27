import styled from "styled-components";

export const Button = styled.button`
  font-size: 18px;
  border-radius: 50px;
  background-color: ${({ theme, disabled }) => {
    return disabled ? theme.palette.secondary + 80 : theme.palette.secondary;
  }};
  color: white;
  border: none;
  padding: 10px 30px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
`;
