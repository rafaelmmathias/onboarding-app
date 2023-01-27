import styled from "styled-components";

export const SelectContainer = styled.div`
  color: ${({ theme }) => theme.palette.fontColor};
  position: relative;
  width: 100%;
  .placeholder {
    color: ${({ theme }) => theme.palette.terciary};
  }
  .label {
    margin-bottom: 5px;
  }
  button {
    height: 60px;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    border: 1px solid #000;
    padding: 10px 10px;
    border-radius: 4px;
    border-color: ${({ theme }) => theme.palette.terciary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    div {
      flex: 1;
      text-align: center;
    }
    svg {
      width: 1.25rem;
      color: #b9bcc0;
    }
  }

  ul {
    position: absolute;
    width: calc(100% - 2px);
    margin-top: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: ${({ theme }) => theme.palette.terciary};
    box-shadow: 0px 2px 8px rgb(0 0 0 / 10%);
    border-radius: 5px;
    background-color: #fff;
    max-height: 155px;
    overflow: scroll;
    li[data-headlessui-state~="selected"] {
      opacity: 40%;
    }
    li {
      background-color: ${({ theme }) => theme.palette.primary};
      height: 45px;
      cursor: pointer;
      justify-content: center;
      display: flex;
      align-items: center;
      border-color: ${({ theme }) => theme.palette.primary};
      border-width: 1px;
      border-style: solid;
      border-left: none;
      border-right: none;
      &:hover {
        opacity: 40%;
      }
    }
  }
`;
