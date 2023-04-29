import Title from "../Title";
import MenuDishes from "../MenuDishes";
import DishesItems from "../DishesItems";
import BasketAndSearch from "../BasketAndSearch";
import { ScrollToTopButton } from "../ScrollToTopButton";
import { Promotion } from "../Promotion";
import { News } from "../News";
import { PopupNewsBtn } from "../PopupNewsBtn";
import { getDishesItemsConfig } from "../../../redux/actions";
import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const Menu = () => {
  const [isNewsCheckboxChecked, setIsNewsCheckboxChecked] = useState(false);
  const dispatch = useDispatch();
  const handleNewsSwitcher = () => setIsNewsCheckboxChecked((prev) => !prev);

  useEffect(() => {
    dispatch(getDishesItemsConfig());
  }, []);

  return (
    <MenuWrapper>
      <MenuDishesContainer>
        <TitleDishesWrapper>
          <Title />
          <ShowNewsPopupContainer>
            <ShowNewsBtnContainer>
              <ShowNewsTitle>Press! See more news</ShowNewsTitle>
              <PopupNewsBtn
                setIsNewsCheckboxChecked={setIsNewsCheckboxChecked}
                isNewsCheckboxChecked={isNewsCheckboxChecked}
              />
            </ShowNewsBtnContainer>
            <BasketAndSearch />
          </ShowNewsPopupContainer>
        </TitleDishesWrapper>
        <MenuDishes />
        <DishesItems />
      </MenuDishesContainer>
      <ScrollToTopButton />
      <PromotionWrapper isNewsCheckboxChecked={isNewsCheckboxChecked}>
        <PromotionOutsideSpace onClick={handleNewsSwitcher} />
        <PromotionContainer>
          <BasketInPromotionWrap>
            <BasketAndSearch />
          </BasketInPromotionWrap>
          <Promotion />
          <News />
        </PromotionContainer>
      </PromotionWrapper>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  animation-name: "showMenuSection";
  animation-duration: 700ms;
  transition-timing-function: linear;
  display: flex;
  justify-content: space-between;

  @keyframes showMenuSection {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TitleDishesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ShowNewsPopupContainer = styled.div`
  position: relative;
  display: none;
  margin-top: -80px;

  & > div:first-of-type {
    position: absolute;
    right: 3px;

    @media (max-width: 580px) {
      right: -10px;
      top: -33px;
    }

    @media (max-width: 420px) {
      top: -10px;
      right: 0;
    }
  }

  & > div:last-of-type {
    top: 65px;

    @media (max-width: 740px) {
      top: 50px;
    }

    @media (max-width: 580px) {
      right: -15px;
      top: 16px;
    }

    @media (max-width: 420px) {
      top: 44px;
      right: 0;
    }
  }

  @media (max-width: 1410px) {
    display: block;
  }
`;

const ShowNewsBtnContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ShowNewsTitle = styled.p`
  font-size: 16px;
  font-weight: 900;
  width: 100px;
  margin: 10px 10px 0 0;
  color: #2d9cdb;

  @media (max-width: 740px) {
    font-size: 12px;
    margin: 0 -22px 0 0;
  }
`;

const MenuDishesContainer = styled.div`
  max-width: 675px;
  margin-right: 71px;

  @media (max-width: 1410px) {
    max-width: 885px;
    margin-right: 0;
  }
`;

const BasketInPromotionWrap = styled.div`
  position: relative;
  z-index: 1;
  @media (max-width: 1410px) {
    display: none;
  }
`;

const PromotionOutsideSpace = styled.div``;

const PromotionWrapper = styled.div`
  @media (max-width: 1410px) {
    ${(props) =>
      props.isNewsCheckboxChecked &&
      `
      ${PromotionOutsideSpace} {
        position: absolute;
        top: -40px;
        right: 0;
        left: -233px;
        bottom: -40px;
        z-index: 5;
      }

      ${PromotionContainer}{
        display: block;
        position: absolute;
        top: 54px;
        right: 51px;
        background-color: rgb(234,241,254);
        z-index: 5;
        box-shadow: 0px 3px 20px 6px rgba(0,0,0,0.75);
        border-radius: 15px;
        padding: 0 25px 20px;

        animation-name: "news";
        animation-duration: 800ms;
        transition-timing-function: ease-in-out;

        @media (max-width: 740px) {
          top: 43px;
          right: 19px;
        }

        @media (max-width: 580px) {
          top: 10px;
          right: 0;
        }

        @keyframes news {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      }
    `}
  }
`;
const PromotionContainer = styled.div`
  max-width: 259px;

  @media (max-width: 1410px) {
    display: none;
  }

  @media (max-width: 475px) {
    max-width: 230px;
  }
`;
