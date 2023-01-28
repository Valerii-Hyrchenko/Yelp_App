import Menu from "../Components/GeneralUI/Menu";
import Avatar from "../Components/GeneralUI/Avatar";
import SignUpAccount from "../Components/GeneralUI/SignUpAccount";
import FasterDelivery from "../Components/GeneralUI/FasterDelivery";
import Title from "../Components/GeneralUI/Title";
import MenuDishes from "../Components/GeneralUI/MenuDishes";
import DishesItems from "../Components/GeneralUI/DishesItems";
import BasketAndSearch from "../Components/GeneralUI/BasketAndSearch";
import { ScrollToTopButton } from "../Components/GeneralUI/ScrollToTopButton";
import { Promotion } from "../Components/GeneralUI/Promotion";
import { News } from "../Components/GeneralUI/News";
import { PopupNewsBtn } from "../Components/GeneralUI/PopupNewsBtn";
import { BurgerMenuBtn } from "../Components/GeneralUI/BurgerMenuBtn";
import styled from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const GeneralPage = () => {
  const [isNewsCheckboxChecked, setIsNewsCheckboxChecked] = useState(false);
  const [isBurgerCheckboxChecked, setIsBurgerCheckboxChecked] = useState(false);

  const handleNewsSwitcher = () => setIsNewsCheckboxChecked((prev) => !prev);
  const handleLeftBarSwitcher = () =>
    setIsBurgerCheckboxChecked((prev) => !prev);

  const currentAuthUser = useSelector(
    (state) => state.currentAuthUser.currentAuthUser
  );
  useEffect(() => {
    if (currentAuthUser === null) {
      localStorage.setItem("authUser", JSON.stringify(null));
    } else {
      localStorage.setItem("authUser", JSON.stringify(currentAuthUser));
    }
  }, [currentAuthUser]);

  return (
    <GeneralPageFlexWrapper>
      <LeftBarWrapper isBurgerCheckboxChecked={isBurgerCheckboxChecked}>
        <LeftBarOutsideSpace onClick={handleLeftBarSwitcher} />
        <LeftBarContainer>
          {currentAuthUser ? <Avatar /> : <SignUpAccount />}
          <Menu />
          <FasterDelivery />
        </LeftBarContainer>
      </LeftBarWrapper>
      <GeneralUIContainer>
        <MenuDishesContainer>
          <BurgerMenuBtn
            isBurgerCheckboxChecked={isBurgerCheckboxChecked}
            setIsBurgerCheckboxChecked={setIsBurgerCheckboxChecked}
          />
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
      </GeneralUIContainer>
    </GeneralPageFlexWrapper>
  );
};

const GeneralPageFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const LeftBarWrapper = styled.div`
  @media (max-width: 1080px) {
    display: ${(props) => (props.isBurgerCheckboxChecked ? "block" : "none")};
  }

  ${(props) =>
    props.isBurgerCheckboxChecked &&
    `
      ${LeftBarContainer} {
        position: absolute;
        top: 0;
        left: 10px;
        z-index: 12;
        background-color: rgb(234, 241, 254);
        padding: 10px 30px 30px;
        border-radius: 15px;
        box-shadow: 0px 3px 20px 6px rgba(0, 0, 0, 0.75);

        animation-name: "menu";
        animation-duration: 800ms;
        transition-timing-function: ease-in-out;

        @keyframes menu {
          0% {
            transform: translateX(-500px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @media (max-width: 580px) {
          left: 3px;
        }

        @media (max-width: 480px) {
          padding: 10px 24px 30px;
        }

        @media (max-width: 360px) {
          max-width: 175px;
          padding: 10px 20px 25px;
        }
      }

      ${LeftBarOutsideSpace} {
        position: absolute;
        top: -40px;
        right: -40px;
        left: 0;
        bottom: 0;
        z-index: 12;

        @media (max-width: 475px) {
          right: -10px;
        }
      }
  `}
`;

const LeftBarOutsideSpace = styled.div``;

const LeftBarContainer = styled.div`
  max-width: 188px;
`;

const GeneralUIContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  border-radius: 40px;
  background-color: #fff;
  padding: 50px 55px 21px 60px;
  position: relative;

  @media (max-width: 740px) {
    padding: 50px 30px 21px 50px;
  }

  @media (max-width: 580px) {
    max-width: 320px;
  }

  @media (max-width: 475px) {
    padding: 50px 25px 21px 35px;
  }

  @media (max-width: 410px) {
    padding: 50px 25px 21px 35px;
  }

  @media (max-width: 410px) {
    max-width: 290px;
    padding-left: 20px;
  }

  @media (max-width: 360px) {
    padding: 50px 10px 21px 10px;
    max-width: 280px;
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

    @media (max-width: 410px) {
      top: -10px;
    }

    @media (max-width: 360px) {
      right: 19px;
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

    @media (max-width: 410px) {
      top: 46px;
    }

    @media (max-width: 360px) {
      right: 10px;
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

  @media (max-width: 410px) {
    max-width: 290px;
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
