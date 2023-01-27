import styled from "styled-components";

export const Button = styled.button`
  font-size: 18px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.palette.secondary};
  opacity: ${({ disabled }) => (disabled ? "50%" : "initial")};
  color: white;
  border: none;
  padding: 10px 30px;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  text-transform: uppercase;
  &.outline {
    background-color: transparent;
    color: ${({ theme }) => {
      return theme.palette.fontColor;
    }};
    border-color: ${({ theme }) => theme.palette.secondary};
    border-width: 1px;
    border-style: solid;
  }
`;
