import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  :focus {
    outline: none;
  }
  text-align: center;
  background-color: transparent;
  width: 100%;
  height: 37px;
  padding: 10px 10px;
  border-color: ${({ theme }) => theme.palette.terciary};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
`;
const InputContainer = styled.div`
  width: 100%;
  label {
    display: block;
    margin-bottom: 5px;
  }
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.palette.terciary};
  }
`;

type InputProps = {
  label: string;
  id?: string;
  tip?: string;
};

export const Input: React.FC<
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ label, tip = "", id = "", ...rest }) => {
  return (
    <InputContainer>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput id={id} {...rest} />
      {tip && <span>{tip}</span>}
    </InputContainer>
  );
};
