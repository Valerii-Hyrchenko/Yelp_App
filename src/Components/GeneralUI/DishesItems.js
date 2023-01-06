import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { dishesConfig } from "../allConfigsConst";
import { useEffect, memo } from "react";
import {
  showBasket,
  updateBasket,
  firstTimeShowBasket,
} from "../../redux/actions";
import settingsImg from "../../assets/img/dishes_items/settings-img.svg";

import addDishImg from "../../assets/img/dishes_items/add_dish.svg";
import chosenDishImg from "../../assets/img/dishes_items/chosen_dish.svg";

const DishesItems = () => {
  const dispatch = useDispatch();
  const selectedDishesGroup = useSelector((state) => state.activeDishGroup);
  const isFirstBasketShow = useSelector(
    (state) => state.isFirsTimeBasketShow.isFirstShow
  );
  const selectedDishes = useSelector(
    (state) => state.basketProcessing.selectedDishes
  );
  const changeDish = (item) => dispatch(updateBasket(item));
  const getCurrentDishesArr = (activeDishGroup) => {
    if (activeDishGroup === "All") {
      return dishesConfig;
    } else {
      return dishesConfig.filter((item) => item.group === activeDishGroup);
    }
  };

  useEffect(() => {
    if (isFirstBasketShow && selectedDishes.length === 1) {
      dispatch(showBasket());
    }
    if (selectedDishes.length === 0) {
      dispatch(firstTimeShowBasket());
    }
  }, [selectedDishes]);

  return (
    <ItemsContainer>
      <TitleWrapper>
        <Title>All Items</Title>
        <SettingsImg src={settingsImg} alt="settings-img" />
      </TitleWrapper>
      <ItemsFlexContainer>
        {getCurrentDishesArr(selectedDishesGroup.activeDishGroup).map(
          (item) => (
            <ItemWrapper
              key={item.id}
              activeCard={selectedDishes.some((dish) => dish.id === item.id)}
            >
              <ItemImg src={item.img} alt={`${item.title}_img`} />
              <ItemContentWrapper>
                <ItemContentTitle>{item.title}</ItemContentTitle>
                <ItemContentText>{item.text}</ItemContentText>
                <ItemContentPrice>{`$${item.price}`}</ItemContentPrice>
                <AddDish
                  onClick={() => changeDish(item)}
                  alt="add_dish_img"
                  src={
                    selectedDishes.some((dish) => dish.id === item.id)
                      ? chosenDishImg
                      : addDishImg
                  }
                />
              </ItemContentWrapper>
            </ItemWrapper>
          )
        )}
      </ItemsFlexContainer>
    </ItemsContainer>
  );
};

const ItemsContainer = styled.div``;

const TitleWrapper = styled.div`
  display: flex;
  padding-bottom: 15px;
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 24px;
  line-height: 27px;
  margin-right: 30px;
`;

const SettingsImg = styled.img``;

const ItemsFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 675px;
  justify-content: space-between;

  &::after {
    content: "";
    width: 206px;
  }

  @media (max-width: 1410px) {
    width: 885px;
  }

  @media (max-width: 1280px) {
    width: 675px;
  }

  @media (max-width: 870px) {
    max-width: 550px;
  }

  @media (max-width: 740px) {
    max-width: 425px;
  }

  @media (max-width: 580px) {
    max-width: 320px;
    justify-content: center;
    margin-bottom: 20px;
  }

  @media (max-width: 410px) {
    max-width: 290px;
  }
`;

const ItemWrapper = styled.div`
  padding-top: ${(props) => (props.activeCard ? "85px" : "90px")};
  max-width: 206px;
  position: relative;
  margin-bottom: 15px;
  transition: all 420ms linear;

  ${(props) =>
    props.activeCard &&
    `
    ${ItemContentWrapper}{
      background-color: #F2EEEE;
      transition: all 420ms linear;
    }
    ${AddDish}{
      bottom: 17px;
      transition: all 420ms linear;
    }
    ${ItemContentPrice}{
      bottom: 21px;
      transition: all 420ms linear;
    }
  `}

  @media (max-width: 580px) {
    max-width: 190px;
    padding-top: ${(props) => (props.activeCard ? "65px" : "70px")};
  }
`;

const ItemImg = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);

  @media (max-width: 580px) {
    transform: translate(-50%) scale(0.75, 0.75);
    top: -23px;
  }
`;

const ItemContentWrapper = styled.div`
  padding: 55px 25px 12px 28px;
  border-radius: 30px;
  border: 1px solid #f2eeee;
  height: 125px;
  transition: all 420ms linear;

  @media (max-width: 580px) {
    padding-top: 35px;
  }
`;

const ItemContentTitle = styled.p`
  font-weight: 800;
  font-size: 14px;
  line-height: 13px;
  margin-bottom: 8px;
`;

const ItemContentText = styled.p`
  font-weight: 600;
  font-size: 11px;
  line-height: 18px;
  color: #898686;
  margin-bottom: 10px;
`;

const ItemContentPrice = styled.p`
  font-weight: 800;
  font-size: 14px;
  line-height: 18px;
  position: absolute;
  bottom: 16px;
  left: 28px;
  transition: all 420ms linear;
`;

const AddDish = styled.img`
  position: absolute;
  bottom: 12px;
  right: 9px;
  cursor: pointer;
  transition: all 420ms linear;
`;

export default memo(DishesItems);
