import styled from "styled-components";
import { BasketProcessing } from "./BasketProcessing";
import { showBasket } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { memo } from "react";

import searchIcon from "../../assets/icons/basket/search_icon.svg";
import basketIcon from "../../assets/icons/basket/basket-icon.svg";

const BasketAndSearch = () => {
  const dispatch = useDispatch();
  const isBasketShow = useSelector((state) => state.isBasketShow.isShow);
  const selectedDishes = useSelector(
    (state) => state.basketProcessing.selectedDishes
  );

  return (
    <BasketFlexContainer>
      <SearchWrapper>
        <SearchImg src={searchIcon} alt="search-icon" />
      </SearchWrapper>
      <BasketWrapper onClick={() => dispatch(showBasket())}>
        {selectedDishes.length > 0 ? (
          <DishesCounterWrap>
            <DishesCounter>{selectedDishes.length}</DishesCounter>
          </DishesCounterWrap>
        ) : null}
        <BasketImg src={basketIcon} alt="basket-icon" />
      </BasketWrapper>
      <BasketProcessingWrapper>
        {isBasketShow ? <BasketProcessing /> : null}
      </BasketProcessingWrapper>
    </BasketFlexContainer>
  );
};

const BasketFlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;
const BasketProcessingWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: -45px;
  right: 258px;

  @media (max-width: 1410px) {
    top: -125px;
  }

  @media (max-width: 740px) {
    top: -94px;
    right: 282px;
  }

  @media (max-width: 580px) {
    top: -61px;
    right: 301px;
  }
`;

const SearchWrapper = styled.div`
  padding: 16px;
  background: #f3f3f3;
  border-radius: 15px;
  -webkit-tap-highlight-color: transparent;
  margin-right: 20px;
  cursor: pointer;

  @media (max-width: 740px) {
    padding: 13px;
    max-height: 14px;
    margin-right: 10px;
  }
`;

const SearchImg = styled.img`
  @media (max-width: 740px) {
    width: 14px;
  }
`;

const BasketWrapper = styled.div`
  padding: 16px;
  background: #666666;
  border-radius: 15px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  position: relative;

  @media (max-width: 740px) {
    padding: 12px;
    max-height: 14px;
  }
`;

const BasketImg = styled.img`
  @media (max-width: 740px) {
    width: 14px;
  }
`;

const DishesCounterWrap = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  width: 19px;
  height: 19px;
  border-radius: 50%;
  background-color: red;

  @media (max-width: 740px) {
    width: 15px;
    height: 15px;
  }
`;

const DishesCounter = styled.p`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 10px;
  color: #fff;
  font-weight: 900;
  line-height: 0;

  @media (max-width: 740px) {
    font-size: 8px;
  }
`;

export default memo(BasketAndSearch);
