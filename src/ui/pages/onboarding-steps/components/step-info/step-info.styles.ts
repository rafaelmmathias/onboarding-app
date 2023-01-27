import styled from "styled-components";

export const StepInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    max-width: 80%;
    text-transform: uppercase;
  }
`;

export const StepInfoIconsContainer = styled.div`
  display: flex;
  margin: 30px 0;
`;

export const StepInfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 20px;
  span {
    margin-top: 10px;
    text-align: center;
  }
`;
