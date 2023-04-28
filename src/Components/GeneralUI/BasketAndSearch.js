import styled from "styled-components";
import { BasketProcessing } from "./BasketProcessing";
import { SearchProcessing } from "./SearchProcessing";
import { showBasket } from "../../redux/actions";
import { clearSearch } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, useRef, memo } from "react";

import searchIcon from "../../assets/icons/basket/search_icon.svg";
import closeSearchIcon from "../../assets/icons/close_modal/close_search.svg";
import basketIcon from "../../assets/icons/basket/basket-icon.svg";

const BasketAndSearch = () => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isSearchDeleted, setIsSearchDeleted] = useState(false);
  const dispatch = useDispatch();
  const isBasketShow = useSelector((state) => state.isBasketShow.isShow);
  const selectedDishes = useSelector(
    (state) => state.basketProcessing.selectedDishes
  );
  const refSearch = useRef();

  const handleShowSearch = () => {
    if (!isSearchShow) {
      setIsSearchDeleted(false);
      setIsSearchShow(true);
    } else {
      setIsSearchDeleted(true);
      setTimeout(() => {
        setIsSearchShow(false);
        dispatch(clearSearch());
      }, 750);
    }
  };

  useEffect(() => {
    if (isSearchShow) {
      const handleClickOutside = (event) => {
        if (!refSearch.current.contains(event.target)) {
          setIsSearchDeleted(true);
          setTimeout(() => {
            setIsSearchShow(false);
            dispatch(clearSearch());
          }, 750);
        }
      };
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }
  }, [isSearchShow]);

  return (
    <BasketFlexContainer>
      <SearchWrapper ref={refSearch}>
        {isSearchShow ? (
          <SearchProcessing isSearchDeleted={isSearchDeleted} />
        ) : null}
        <SearchImgWrapper
          isSearchShow={isSearchShow}
          onClick={handleShowSearch}
        >
          <SearchImg
            src={isSearchShow ? closeSearchIcon : searchIcon}
            alt="search-icon"
          />
        </SearchImgWrapper>
      </SearchWrapper>
      <BasketImgWrapper onClick={() => dispatch(showBasket())}>
        {selectedDishes.length > 0 ? (
          <DishesCounterWrap>
            <DishesCounter>{selectedDishes.length}</DishesCounter>
          </DishesCounterWrap>
        ) : null}
        <BasketImg src={basketIcon} alt="basket-icon" />
      </BasketImgWrapper>
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

  @media (max-width: 420px) {
    flex-direction: column-reverse;
  }
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
  display: flex;
  align-items: center;
`;

const SearchImgWrapper = styled.div`
  position: relative;
  z-index: ${(props) => (props.isSearchShow ? 20 : 5)};
  cursor: pointer;
  padding: 16px;
  background: #f3f3f3;
  border-radius: 15px;
  -webkit-tap-highlight-color: transparent;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
  margin-right: 20px;
  animation-name: ${(props) =>
    props.isSearchShow ? "closingShow" : "searchShow"};
  animation-duration: 800ms;
  transition-timing-function: linear;

  @keyframes searchShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes closingShow {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

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

const BasketImgWrapper = styled.div`
  padding: 16px;
  background: #666666;
  border-radius: 15px;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  position: relative;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  @media (max-width: 740px) {
    padding: 12px;
    max-height: 14px;
  }

  @media (max-width: 420px) {
    margin: 0 10px 10px 0;
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
