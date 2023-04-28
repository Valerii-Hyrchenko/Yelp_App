import { memo, useState, useEffect } from "react";
import { ButtonWrapper } from "./UserProfileForm";
import { Button } from "./UserProfileForm";
import styled from "styled-components";
import { profileInputsConfig } from "../allConfigsConst";
import { ref, onValue } from "firebase/database";
import { database } from "../../base";
import { useSelector } from "react-redux";

const ProfileInformation = ({ handleFormRender }) => {
  const [currentUserProfile, setCurrentUserProfile] = useState(null);
  const { currentAuthUser } = useSelector((state) => state.currentAuthUser);

  const getUserProfileData = () => {
    const starCountRef = ref(
      database,
      `/usersProfileInfo/${currentAuthUser ? currentAuthUser.uid : null}`
    );
    onValue(starCountRef, (snapshot) => {
      let profileObj = snapshot.val();
      let profileArr = [];
      for (let key in profileObj) {
        profileArr.push(profileObj[key]);
      }
      setCurrentUserProfile(profileArr);
    });
  };

  useEffect(() => {
    getUserProfileData();
  }, []);

  return (
    <>
      <UserProfileInfoTitle>User profile information</UserProfileInfoTitle>
      <UserCurrentProfileWrap>
        {currentUserProfile ? (
          <>
            {currentUserProfile.length === 0
              ? profileInputsConfig.map((item) => (
                  <UserProfileTextWrap key={item.id}>
                    <UserProfileText>
                      <span>
                        {item.label.slice(0, 1).toUpperCase()}
                        {item.label.slice(1)}:
                      </span>
                      {window.screen.width < 741 ? <br /> : null}
                      There is no current data. Fill out your profile.
                    </UserProfileText>
                  </UserProfileTextWrap>
                ))
              : currentUserProfile.map(({ id, value, fieldTitle }) => (
                  <UserProfileTextWrap key={id}>
                    <UserProfileText>
                      <span>{fieldTitle}</span>
                      {window.screen.width < 741 ? <br /> : null}
                      {value}
                    </UserProfileText>
                  </UserProfileTextWrap>
                ))}
            <ButtonWrapper>
              <Button onClick={handleFormRender}>Change/Fill my profile</Button>
            </ButtonWrapper>
          </>
        ) : (
          <UserProfileTextWrap>
            <UserProfileText>
              {currentAuthUser
                ? `...loading`
                : `Filling user profile is available only after creating an
                  account and authorization. Please create an account or log in if you already have one.`}
            </UserProfileText>
          </UserProfileTextWrap>
        )}
      </UserCurrentProfileWrap>
    </>
  );
};

export default memo(ProfileInformation);

const UserCurrentProfileWrap = styled.div`
  background-color: #eaf1fe;
  padding: 40px;
  border-radius: 35px;

  @media (max-width: 740px) {
    padding: 30px;
  }

  @media (max-width: 420px) {
    padding: 20px;
  }

  @media (max-width: 375px) {
    padding: 15px 10px;
    border-radius: 15px;
  }
`;

const UserProfileInfoTitle = styled.h2`
  font-size: 32px;
  font-weight: 900;
  margin: 0 0 25px 15px;

  @media (max-width: 1080px) {
    margin: 0 0 25px 45px;
  }

  @media (max-width: 740px) {
    font-size: 28px;
  }

  @media (max-width: 580px) {
    margin: 0 auto 25px;
    text-align: center;
  }
`;

const UserProfileTextWrap = styled.div`
  padding: 15px 10px 12px;
  background-color: #ffffff;
  border-radius: 12px;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

const UserProfileText = styled.p`
  color: #6b6a6a;
  font-weight: 900;
  line-height: 24px;
  word-break: break-word;

  @media (max-width: 740px) {
    font-size: 14px;
  }

  & > span {
    color: #047fb8;
    font-size: 18px;
    margin-right: 10px;

    @media (max-width: 740px) {
      font-size: 16px;
    }
  }
`;
