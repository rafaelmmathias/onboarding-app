import styled from "styled-components";

export const StepContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.primary};
  color: ${({ theme }) => theme.palette.fontColor};
  display: flex;
  padding: 50px 30px 10px 30px;
  border-radius: 16px;
  margin: 0 auto;
  width: 70%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  min-height: 350px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  span {
    text-align: center;
  }
  span.title {
    font-size: 35px;
    margin-bottom: 20px;
  }
  span.description {
    font-weight: 300;
  }
`;
