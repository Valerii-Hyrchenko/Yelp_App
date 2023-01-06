import styled from "styled-components";
import { memo } from "react";
import emoji from "../../assets/img/emoji/emoji-title.svg";

const Title = () => {
  return (
    <TitleContainer>
      <TitleUI>
        Welcome To Lucknow
        <EmojiImg src={emoji} alt="title-emoji" />
      </TitleUI>
    </TitleContainer>
  );
};

const TitleContainer = styled.div`
  margin-bottom: 30px;
`;

const TitleUI = styled.h1`
  font-weight: 800;
  font-size: 48px;
  line-height: 65px;
  max-width: 320px;

  @media (max-width: 1080px) {
    margin-left: 40px;
  }

  @media (max-width: 740px) {
    font-size: 36px;
    line-height: 36px;
  }

  @media (max-width: 580px) {
    margin: 20px 0 0 20px;
    font-size: 30px;
    line-height: 30px;
  }

  @media (max-width: 410px) {
    font-size: 26px;
    line-height: 28px;
    margin-left: 15px;
  }

  @media (max-width: 360px) {
    font-size: 24px;
    line-height: 24px;
    margin-left: 10px;
  }
`;

const EmojiImg = styled.img`
  margin: 0 0 -18px 4px;

  @media (max-width: 740px) {
    width: 55px;
  }

  @media (max-width: 580px) {
    margin: 0 0 -12px 4px;
    width: 40px;
  }
`;

export default memo(Title);
