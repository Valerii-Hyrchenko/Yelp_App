import styled from "styled-components";
import flyingBurger from "../../assets/img/burger_fly/burger_fly.png";
import grapes from "../../assets/img/images_for_design/grapes.svg";

export const Loader = () => {
  return (
    <LoaderWrapper>
      <ImagesWrapper>
        <FlyingBurgerImg src={flyingBurger} alt="flying-burger-img" />
        <GrapesImg src={grapes} alt="grapes-img" />
      </ImagesWrapper>
      <LoaderTitle>Yelp App</LoaderTitle>
      <LoaderText>developed by Valerii Hyrchenko</LoaderText>
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  position: relative;
  max-width: 750px;
  margin: 0 auto;
  padding-top: 270px;
  height: 50vh;

  @media (max-width: 870px) {
    max-width: 380px;
  }

  @media (max-width: 550px) {
    max-width: 300px;
  }
`;

const LoaderTitle = styled.h2`
  font-weight: 800;
  font-size: 72px;
  text-align: center;

  @media (max-width: 870px) {
    font-size: 56px;
  }

  @media (max-width: 550px) {
    font-size: 44px;
  }
`;

const ImagesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  animation-name: "fruitRotation";
  animation-duration: 3000ms;
  /* animation-iteration-count: infinite; */
  transition-timing-function: ease-in-out;

  @keyframes fruitRotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const FlyingBurgerImg = styled.img`
  position: absolute;
  top: 30px;
  right: 7px;

  @media (max-width: 870px) {
    max-width: 250px;
    top: 94px;
    right: -83px;
  }

  @media (max-width: 580px) {
    right: -45px;
    top: 80px;
  }

  @media (max-width: 410px) {
    right: -10px;
  }
`;

const GrapesImg = styled.img`
  position: absolute;
  bottom: 60px;
  left: 40px;

  @media (max-width: 870px) {
    max-width: 168px;
    bottom: 90px;
    left: -76px;
  }

  @media (max-width: 580px) {
    left: -33px;
    bottom: 61px;
  }

  @media (max-width: 360px) {
    left: 0;
  }
`;

const LoaderText = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 55px;
  text-align: center;
  margin-top: 15px;

  @media (max-width: 850px) {
    font-size: 20px;
    margin-top: 5px;
  }

  @media (max-width: 550px) {
    font-size: 16px;
  }
`;
