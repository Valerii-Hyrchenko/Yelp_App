import { Button } from "./SignOutFromApp";
import styled from "styled-components";
import { useNav } from "../../hooks/useNav";
import { memo } from "react";

import loginIcon from "../../assets/icons/sign_up/login.svg";

const SignUpAccount = () => {
  const { goTo } = useNav();

  return (
    <SignUpWrapper>
      <SignUpTitle>Log in or create an account</SignUpTitle>
      <ButtonWrapper>
        <IconWrapper>
          <Icon src={loginIcon} alt="login-icon" />
        </IconWrapper>
        <Button onClick={() => goTo("/login")} signUp="true">
          Go to account
        </Button>
      </ButtonWrapper>
    </SignUpWrapper>
  );
};

const SignUpWrapper = styled.div`
  padding: 20px 10px 20px 14px;
  margin: 35px 0 50px;
  border-radius: 15px;
  background: #eaf1fe;
  box-shadow: 5px 5px 10px #c7cdd8, -5px -5px 10px #ffffff;

  @media (max-width: 1080px) {
    margin-top: 65px;
  }
`;

const SignUpTitle = styled.p`
  font-weight: 900;
  margin-bottom: 10px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const IconWrapper = styled.div`
  margin-right: 5px;
`;

const Icon = styled.img`
  width: 30px;
`;

export default memo(SignUpAccount);
