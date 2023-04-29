import styled from "styled-components";
import { trendingConfig } from "../../allConfigsConst";
import trendsBurger from "../../../assets/img/trending/burgers_trends.webp";

export const Trending = () => {
  return (
    <TrendingPageWrapper>
      <TrendingTitlesWrap>
        <TrendingTitle>
          3 BURGER TRENDS TO POWER YOUR NEXT SIGNATURE DISH
        </TrendingTitle>
        <TrendsImgWrap>
          <TrendsImg src={trendsBurger} alt="trends_img" />
        </TrendsImgWrap>
        <BurgersTitle>INSPIRATION BY BURGERS</BurgersTitle>
      </TrendingTitlesWrap>
      <BurgersFlexWrapper>
        {trendingConfig.map(({ id, img, name, description }) => (
          <BurgersItemWrap key={id}>
            <BurgerItemText>'{name}'</BurgerItemText>
            <BurgerImgWrapper>
              <BurgerImg src={img} alt="burger_trending_img" />
            </BurgerImgWrapper>
            <BurgerItemText>{description}</BurgerItemText>
          </BurgersItemWrap>
        ))}
      </BurgersFlexWrapper>
    </TrendingPageWrapper>
  );
};

const TrendingPageWrapper = styled.div`
  width: 1005px;
  padding: 30px 0;

  @media (max-width: 1410px) {
    width: 885px;
  }

  @media (max-width: 1280px) {
    width: 675px;
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

const TrendingTitlesWrap = styled.div`
  animation-name: "showTrendingTitle";
  animation-duration: 800ms;
  transition-timing-function: linear;

  @keyframes showTrendingTitle {
    0% {
      opacity: 0;
      transform: translateY(-200px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TrendingTitle = styled.h2`
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 60px;
  text-align: center;

  @media (max-width: 580px) {
    font-size: 26px;
    margin-bottom: 40px;
  }

  @media (max-width: 420px) {
    font-size: 22px;
  }
`;

const TrendsImgWrap = styled.div`
  width: 65%;
  height: 100%;
  margin: 0 auto;
  border-radius: 15px;

  @media (max-width: 870px) {
    width: 90%;
  }

  @media (max-width: 580px) {
    width: 100%;
  }
`;

const TrendsImg = styled.img`
  width: 100%;
  border-radius: 15px;
`;

const BurgersFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-left: 15px solid #2d9cdb;
  padding-left: 40px;
  animation-name: "showTrendingBurgers";
  animation-duration: 800ms;
  transition-timing-function: linear;

  @keyframes showTrendingBurgers {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1410px) {
    flex-wrap: wrap;
    justify-content: space-around;
    row-gap: 40px;
  }

  @media (max-width: 580px) {
    border-left: 10px solid #2d9cdb;
    padding-left: 30px;
  }

  @media (max-width: 420px) {
    padding-left: 20px;
  }
`;

const BurgersItemWrap = styled.div`
  padding: 20px 0;
  max-width: 280px;
  border-bottom: 1px solid #2d9cdb;
  border-top: 1px solid #2d9cdb;
`;

const BurgersTitle = styled.h2`
  font-size: 26px;
  font-weight: 900;
  text-align: center;
  color: #31558f;
  margin: 60px 0 20px;

  @media (max-width: 580px) {
    font-size: 24px;
  }

  @media (max-width: 420px) {
    font-size: 20px;
    margin: 40px 0 30px;
  }
`;

const BurgerImgWrapper = styled.div`
  width: 100%;

  @media (max-width: 420px) {
    width: 85%;
    margin: 0 auto;
  }
`;

const BurgerImg = styled.img`
  width: 100%;
`;

const BurgerItemText = styled.p`
  &:first-of-type {
    color: #31558f;
    font-weight: 900;
    font-size: 18px;
    text-align: center;
    margin-bottom: 20px;
    text-decoration: underline;
  }

  &:last-of-type {
    line-height: 20px;
    margin-top: 15px;
    text-align: center;

    @media (max-width: 420px) {
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
