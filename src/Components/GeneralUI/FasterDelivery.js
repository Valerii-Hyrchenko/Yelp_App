import styled from "styled-components";
import { memo } from "react";

import man from "../../assets/img/delivery/delivery-man.png";
import arrow from "../../assets/img/delivery/arrow.svg";

export const FasterDelivery = () => {
  return (
    <DeliveryWrap>
      <DeliveryManImg src={man} alt="delivery-man" />
      <ContentContainer>
        <Title>Faster delivery!</Title>
        <FlexContainer>
          <Text>Know More</Text>
          <Arrow src={arrow} alt="delivery-arrow" />
        </FlexContainer>
      </ContentContainer>
    </DeliveryWrap>
  );
};

const DeliveryWrap = styled.div`
  max-width: 184px;
  position: relative;
  margin-top: 125px;

  @media (max-width: 1080px) {
    margin-top: 70px;
  }
`;

const DeliveryManImg = styled.img`
  position: absolute;
  bottom: 48px;
  left: 0;

  @media (max-width: 1080px) {
    width: 140px;
    margin-left: 28px;
  }
`;

const ContentContainer = styled.div`
  height: 62px;
  background-color: #fff;
  border-radius: 25px;
  padding: 88px 12px 12px 26px;
`;

const Title = styled.p`
  font-weight: 800;
  font-size: 18px;
  line-height: 20px;
  margin-bottom: 12px;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled.p`
  font-weight: 700;
  font-size: 10px;
  line-height: 11px;
`;

const Arrow = styled.img``;

export default memo(FasterDelivery);
