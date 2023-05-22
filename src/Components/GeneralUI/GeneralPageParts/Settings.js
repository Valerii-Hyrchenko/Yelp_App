import styled from "styled-components";
import UserProfileForm from "../UserProfileForm";
import ProfileInformation from "../ProfileInformation";
import { useState, memo } from "react";

const Settings = () => {
  const [isChangeFormRender, setIsChangeFormRender] = useState(false);
  const [changeFormDelAnim, setChangeFormDelAnim] = useState(false);

  const handleFormRender = () => {
    setChangeFormDelAnim(false);
    setIsChangeFormRender(true);
  };

  const handleCloseForm = () => {
    setChangeFormDelAnim(true);
    setTimeout(() => {
      setIsChangeFormRender(false);
    }, 700);
  };

  return (
    <>
      <SettingsContainer>
        <ProfileInformation handleFormRender={handleFormRender} />
        {isChangeFormRender ? (
          <UserProfileForm
            handleCloseForm={handleCloseForm}
            changeFormDelAnim={changeFormDelAnim}
          />
        ) : null}
      </SettingsContainer>
      {isChangeFormRender ? (
        <OutsideSpace
          changeFormDelAnim={changeFormDelAnim}
          onClick={handleCloseForm}
        />
      ) : null}
    </>
  );
};

export default memo(Settings);

const SettingsContainer = styled.div`
  width: 1005px;
  animation-name: "showSettings";
  animation-duration: 800ms;
  transition-timing-function: linear;

  @keyframes showSettings {
    0% {
      opacity: 0;
      transform: translateX(80px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 1410px) {
    width: 885px;
  }

  @media (max-width: 1280px) {
    width: 675px;
  }

  @media (max-width: 1080px) {
    min-height: 715px;
  }

  @media (max-width: 870px) {
    width: 550px;
  }

  @media (max-width: 740px) {
    width: 425px;
  }

  @media (max-width: 580px) {
    width: 340px;
  }

  @media (max-width: 420px) {
    width: 305px;
  }

  @media (max-width: 375px) {
    width: 260px;
  }
`;

const OutsideSpace = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  backdrop-filter: blur(5px);
  z-index: 5;
  animation-name: ${({ changeFormDelAnim }) =>
    changeFormDelAnim ? "hideSpace" : "showSpace"};
  animation-duration: 750ms;
  transition-timing-function: linear;

  @keyframes showSpace {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes hideSpace {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;
