import { ImagesForDesign } from "../Components/LoginOrRegister/ImagesForDesign";
import { PageTitle } from "../Components/LoginOrRegister/PageTitle";
import { Form } from "../Components/LoginOrRegister/Form";
import styled from "styled-components";

export const RegisterPage = () => {
  return (
    <RegisterContentContainer>
      <ImagesForDesign />
      <PageTitle />
      <Form pageType="register" />
    </RegisterContentContainer>
  );
};

const RegisterContentContainer = styled.div`
  height: 86vh;
  position: relative;

  @media (max-width: 1410px) {
    height: 89vh;
  }
  @media (max-width: 475px) {
    height: 95vh;
  }
  @media (max-width: 360px) {
    height: 97vh;
  }
`;
