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
      <SignOutButton onClick={handleSignOut}>Sign out</SignOutButton>
    </SignOutButtonWrap>
  );
};

const SignOutButtonWrap = styled.div`
  text-align: center;
  margin-top: 30px;
`;

const SignOutButton = styled.button`
  font-family: "Spartan";
  border: 1px solid #fff;
  color: #fff;
  padding: 12px 30px;
  border-radius: 15px;
  background-color: #2d9cdb;
  font-weight: 900;
  cursor: pointer;
  transition: all 350ms linear;

  &:hover {
    background-color: transparent;
    color: #919191;
    transition: all 450ms linear;
    border: 1px solid #2d9cdb;
  }
`;

export default memo(SignOutFromApp);
