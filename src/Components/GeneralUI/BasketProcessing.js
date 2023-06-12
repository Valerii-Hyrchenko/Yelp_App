import { useNav } from "../../hooks/useNav";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  updateBasket,
  selectActiveMenuPosition,
  hideBasket,
  changeQuantityDishes,
  clearBasket,
  firstTimeShowBasket,
  firstTimeHideBasket,
} from "../../redux/actions";
import { useState } from "react";
import { menuConfig } from "../allConfigsConst";

import arrow from "../../assets/img/delivery/arrow.svg";
import trash from "../../assets/icons/basket/trash.svg";
import inProgressImg from "../../assets/img/in_progress_cooking/in_progress_cooking.png";

export const BasketProcessing = () => {
  const [isOrderComplete, setIsOrderComplete] = useState(false);
  const { goTo } = useNav();

  const {
    basketProcessing: { selectedDishes },
    userProfileInfo: { userProfileInfo },
  } = useSelector((state) => state);

  const dispatch = useDispatch();

  const handleRemoveDishItem = (item) => dispatch(updateBasket(item));

  const handleChangeDishQuantity =
    ({ id }) =>
    ({ target: { value } }) => {
      if (value < 100) dispatch(changeQuantityDishes({ id, value }));
    };

  const handleMakeOrder = () => {
    if (selectedDishes.length > 0) {
      setIsOrderComplete((prev) => !prev);
    } else return;
  };

  const handleGoBackArrow = () => {
    dispatch(hideBasket());
    if (selectedDishes.length > 0) {
      dispatch(firstTimeHideBasket());
    }
  };

  const handleCloseOrder = () => {
    dispatch(hideBasket());
    dispatch(clearBasket());
    dispatch(firstTimeShowBasket());
  };

  return (
    <BasketProcessingContainer>
      <BasketTitleFlexWrap>
        <BasketTitle>Basket</BasketTitle>
        <ArrowWrapper onClick={handleGoBackArrow}>
          <ArrowImg src={arrow} alt="basket-img" />
        </ArrowWrapper>
      </BasketTitleFlexWrap>
      {isOrderComplete ? (
        userProfileInfo ? (
          userProfileInfo.length > 0 ? (
            <InProgressCookingWrap>
              <InProgressCookingImg src={inProgressImg} alt="in-progress-img" />
              <InProgressTitle>in the process of cooking...</InProgressTitle>
              <OrderButton onClick={handleCloseOrder}>Order more</OrderButton>
            </InProgressCookingWrap>
          ) : (
            <>
              <InProgressTitle>
                Please fill out your profile so that we can accurately deliver
                your order!
              </InProgressTitle>
              <OrderButton
                onClick={() =>
                  dispatch(selectActiveMenuPosition(menuConfig[2]))
                }
              >
                Go to settings
              </OrderButton>
            </>
          )
        ) : (
          <>
            <InProgressTitle>
              Sorry, but for accept your order, you need to create an account,
              log in and fill out the settings section.
            </InProgressTitle>
            <OrderButton onClick={() => goTo("/login")}>
              Go to login page
            </OrderButton>
          </>
        )
      ) : (
        <>
          {selectedDishes.length === 0 ? (
            <WhenDontChosen>You haven't selected any dishes yet</WhenDontChosen>
          ) : (
            selectedDishes.map((item) => (
              <ItemFlexWrapper key={item.id}>
                <DescriptionFlexWrap>
                  <DescriptionIconWrapper>
                    <DishIcon src={item.img} alt="dish-icon" />
                  </DescriptionIconWrapper>
                  <DescriptionTitleWrap>
                    <DescriptionTitle>{item.title}</DescriptionTitle>
                    <DescriptionText>{item.text}</DescriptionText>
                  </DescriptionTitleWrap>
                </DescriptionFlexWrap>
                <QuantityAndPriceFlexWrap>
                  <QuantityOfItem>
                    <span>x</span>
                    <EnterQuantity
                      onChange={handleChangeDishQuantity(item)}
                      type="number"
                      value={+item.quantity}
                      autoComplete="off"
                    />
                  </QuantityOfItem>
                  <TotalItemPrice>
                    ${+item.price * +item.quantity}
                  </TotalItemPrice>
                </QuantityAndPriceFlexWrap>
                <TrashBasketImg
                  onClick={() => handleRemoveDishItem(item)}
                  src={trash}
                  alt="trash-basket-img"
                />
              </ItemFlexWrapper>
            ))
          )}
          <OrderButtonWrap>
            <OrderButton onClick={handleMakeOrder}>
              Order - $
              {selectedDishes.reduce(
                (totalPrice, currentPrice) =>
                  +totalPrice + +currentPrice.price * +currentPrice.quantity,
                0
              )}
            </OrderButton>
          </OrderButtonWrap>
        </>
      )}
    </BasketProcessingContainer>
  );
};

const BasketProcessingContainer = styled.div`
  position: fixed;
  max-height: 79vh;
  width: 279px;
  padding: 25px 21px 24px 20px;
  background-color: #fff;
  box-shadow: 0px 4px 46px rgba(0, 0, 0, 0.2);
  border-radius: 30px 0px 0px 30px;
  overflow-y: scroll;
  animation-name: "basket";
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @keyframes basket {
    0% {
      transform: translateX(500px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @media (max-width: 375px) {
    width: 270px;
    margin-left: 15px;
  }
`;

const BasketTitleFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;
`;

const BasketTitle = styled.h2`
  font-weight: 800;
  font-size: 30px;
  line-height: 34px;
`;

const ArrowWrapper = styled.div`
  background: #f5f6f7;
  border-radius: 15px;
  cursor: pointer;
`;

const ArrowImg = styled.img`
  padding: 20px 16px 18px 14px;
`;

const ItemFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  animation-name: "basketItem";
  animation-duration: 1000ms;
  transition-timing-function: ease-in-out;

  @keyframes basketItem {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const DescriptionIconWrapper = styled.div`
  padding: 5px;
  background: #d6f5ff;
  border-radius: 15px;
  min-width: 50px;
  height: 52px;
  position: relative;
  margin-right: 8px;
`;

const DishIcon = styled.img`
  width: 90%;
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
`;

const DescriptionFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DescriptionTitleWrap = styled.div``;

const DescriptionTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 5px;
`;

const DescriptionText = styled.p`
  font-weight: 600;
  font-size: 7px;
  line-height: 10px;
  color: #898686;
  max-width: 115px;
`;

const QuantityAndPriceFlexWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const QuantityOfItem = styled.p`
  font-weight: 700;
  font-size: 10px;
  margin-right: 5px;
  display: flex;
  align-items: center;
`;

const EnterQuantity = styled.input`
  max-width: 38px;
  outline: none;
  border: 1px solid transparent;
  box-sizing: border-box;
  background-color: #f3f3f3;
  border-radius: 5px;
  font-size: 12px;
`;

const TotalItemPrice = styled.p`
  font-weight: 700;
  font-size: 10px;
  max-width: 55px;
`;

const WhenDontChosen = styled.p`
  font-weight: 900;
  font-size: 18px;
  margin-bottom: 20px;
`;

const TrashBasketImg = styled.img`
  margin-top: -5px;
  cursor: pointer;
`;

const OrderButtonWrap = styled.div``;

const OrderButton = styled.button`
  width: 100%;
  padding: 17px 0 15px;
  font-family: "Spartan";
  font-weight: 700;
  font-size: 13px;
  line-height: 18px;
  color: #ffffff;
  box-sizing: border-box;
  border: 1px solid transparent;
  background: #2d9cdb;
  border-radius: 15px;
  cursor: pointer;
  transition: all 350ms linear;

  &:hover {
    border: 1px solid #2d9cdb;
    color: #2d9cdb;
    background: #fff;
    transition: all 350ms linear;
  }
`;

const InProgressCookingWrap = styled.div`
  padding: 108px 8px 120px 11px;
  text-align: center;
  width: 256px;
  animation-name: "inProgress";
  animation-duration: 550ms;
  transition-timing-function: linear;

  @keyframes inProgress {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const InProgressCookingImg = styled.img``;

const InProgressTitle = styled.p`
  font-weight: 800;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  margin-bottom: 30px;
`;
