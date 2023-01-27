import styled from "styled-components";

export const StepHeaderContainer = styled.div`
  font-weight: 300;
  background-color: ${({ theme }) => theme.palette.terciary};
  color: ${({ theme }) => theme.palette.fontColor};
  max-height: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 17px 0 12px;
`;

export const StepMarkerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const StepMarker = styled.div<{ active: boolean }>`
  height: 4px;
  background-color: ${({ theme, active }) =>
    active ? theme.palette.secondary : "#595959"};
  min-width: 10px;
  max-width: 80px;
  width: 100%;
  margin: 0 5px;
`;
