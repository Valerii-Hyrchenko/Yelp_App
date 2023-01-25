import { useNav } from "../../hooks/useNav";
import app from "../../base";
import { signOutUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { memo } from "react";
import styled from "styled-components";

const SignOutFromApp = () => {
  const dispatch = useDispatch();
  const { goTo } = useNav();

  const handleSignOut = async (event) => {
    event.preventDefault();
    dispatch(signOutUser());
    goTo("/");
  };
  return (
    <SignOutButtonWrap>
      <Button onClick={handleSignOut}>Sign out</Button>
    </SignOutButtonWrap>
  );
};

const SignOutButtonWrap = styled.div`
  text-align: center;
  margin-top: 18px;
`;

export const Button = styled.button`
  font-family: "Spartan";
  border: 1px solid transparent;
  color: #fff;
  padding: 12px 30px;
  border-radius: 15px;
  background-color: #2d9cdb;
  font-weight: 900;
  cursor: pointer;
  transition: all 350ms linear;

  ${(props) =>
    props.signUp &&
    `
    padding: 12px 10px;
  `}

  &:hover {
    background-color: transparent;
    color: #919191;
    transition: all 450ms linear;
    border: 1px solid #2d9cdb;
  }
`;

export default memo(SignOutFromApp);
