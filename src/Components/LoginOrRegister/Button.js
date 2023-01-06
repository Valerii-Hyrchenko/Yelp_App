import styled from "styled-components";

export const Button = ({ config }) => {
  return (
    <ButtonWrapper>
      <ButtonForPage type="submit">{config}</ButtonForPage>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  margin-top: 25px;
  text-align: center;
`;

const ButtonForPage = styled.button`
  padding: 16px 0;
  width: 163px;
  font-weight: 700;
  font-size: 14px;
  font-family: "Spartan";
  line-height: 18px;
  color: #fff;
  background: #2d9cdb;
  border-radius: 15px;
  box-sizing: border-box;
  border: 1px solid transparent;
  transition: all 350ms linear;
  cursor: pointer;

  &:hover {
    background: #fff;
    color: #2d9cdb;
    border: 1px solid #2d9cdb;
    transition: all 350ms linear;
  }

  @media (max-width: 950px) {
    padding: 12px 0;
  }
`;
