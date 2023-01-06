import redAppleImg from "../../assets/img/images_for_design/red_apple.svg";
import yellowAppleImg from "../../assets/img/images_for_design/yellow_apple.svg";
import leaf from "../../assets/img/images_for_design/leaf.svg";
import grapes from "../../assets/img/images_for_design/grapes.svg";
import styled from "styled-components";

export const ImagesForDesign = () => {
  return (
    <ImagesWrapper>
      <Grapes src={grapes} alt="grapes-img" />
      <Leaf src={leaf} alt="leaf-img" />
      <YellowApple src={yellowAppleImg} alt="yellow-apple-img" />
      <RedApple src={redAppleImg} alt="red-appleI-img" />
    </ImagesWrapper>
  );
};

const ImagesWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
`;
const RedApple = styled.img`
  position: absolute;
  bottom: 35px;
  left: 25px;

  @media (max-width: 1080px) {
    max-width: 102px;
  }

  @media (max-width: 740px) {
    left: -47px;
    bottom: -27px;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;
const YellowApple = styled.img`
  position: absolute;
  bottom: -54px;
  right: -51px;

  @media (max-width: 1410px) {
    bottom: -34px;
    right: -31px;
  }

  @media (max-width: 1080px) {
    max-width: 168px;
    bottom: -20px;
  }

  @media (max-width: 740px) {
    right: -45px;
    bottom: -10px;
    max-width: 108px;
  }

  @media (max-width: 580px) {
    display: none;
  }
`;
const Leaf = styled.img`
  position: absolute;
  top: -54px;
  right: -61px;

  @media (max-width: 1410px) {
    top: -37px;
    right: -41px;
  }

  @media (max-width: 1080px) {
    max-width: 150px;
  }

  @media (max-width: 740px) {
    max-width: 120px;
  }

  @media (max-width: 580px) {
    max-width: 100px;
    top: -33px;
    right: -38px;
  }

  @media (max-width: 475px) {
    max-width: 70px;
    top: -9px;
    right: -6px;
  }

  @media (max-width: 410px) {
    max-width: 60px;
  }

  @media (max-width: 360px) {
    max-width: 50px;
    top: -3px;
    right: -1px;
  }
`;
const Grapes = styled.img`
  position: absolute;
  top: -52px;
  left: -36px;

  @media (max-width: 1410px) {
    top: -40px;
    left: -30px;
  }

  @media (max-width: 1080px) {
    max-width: 155px;
  }

  @media (max-width: 580px) {
    max-width: 110px;
    left: -19px;
  }

  @media (max-width: 475px) {
    max-width: 90px;
    top: -13px;
    left: -14px;
  }

  @media (max-width: 360px) {
    top: -10px;
    left: -9px;
  }
`;
