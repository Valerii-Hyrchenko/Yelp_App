import styled from "styled-components";
import flyingBurger from "../../assets/img/burger_fly/burger_fly.png";

export const Promotion = () => {
  return (
    <PromotionContainer>
      <PromotionImg src={flyingBurger} alt="promotion-flying-burger" />
      <PromotionTitle>-50% Off</PromotionTitle>
      <PromotionText>the full price of burgers</PromotionText>
    </PromotionContainer>
  );
};

const PromotionContainer = styled.div`
  width: 176px;
  margin-top: 109px;
  padding: 77px 61px 31px 22px;
  background: #ab97f3;
  border-radius: 30px;
  position: relative;

  @media (max-width: 475px) {
    width: 148px;
    padding-top: 60px;
    margin-top: 89px;
  }
`;

const PromotionImg = styled.img`
  position: absolute;
  top: -160px;
  right: -105px;

  @media (max-width: 475px) {
    width: 300px;
    top: -134px;
    right: -88px;
  }
`;

const PromotionTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 27px;
  color: #ffffff;
  margin-bottom: 7px;
`;

const PromotionText = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
