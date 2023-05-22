import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, memo, useState, useRef } from "react";
import { ref, set, onValue } from "firebase/database";
import {
  showBasket,
  updateBasket,
  firstTimeShowBasket,
  checkImgLoading,
} from "../../redux/actions";
import { database } from "../../base";
import { ratingConfig } from "../allConfigsConst";
import dishIconImg from "../../assets/img/dishes_items/dish_icon.svg";
import addDishImg from "../../assets/img/dishes_items/add_dish.svg";
import chosenDishImg from "../../assets/img/dishes_items/chosen_dish.svg";

const DishesItems = () => {
  const [dishesRating, setDishesRating] = useState([]);
  const [tooltip, setTooltip] = useState({});
  const [delTooltipAnim, setDelTooltipAnim] = useState(false);
  const [activeTooltip, setActiveTooltip] = useState(null);
  const [timeoutsId, setTimeoutsId] = useState([]);
  const [dishesArrToRender, setDishesArrToRender] = useState([]);
  const refDishes = useRef([]);

  const dispatch = useDispatch();
  const {
    isImgLoaded,
    activeDishGroup: { activeDishGroup },
    isFirsTimeBasketShow: { isFirstShow },
    basketProcessing: { selectedDishes },
    configItems: { dishesItemsConfig },
    currentAuthUser: { currentAuthUser },
  } = useSelector((state) => state);

  const changeDish = (item) => dispatch(updateBasket(item));

  const ratingHoverOn =
    (currentIndex) =>
    ({ target }) => {
      let allStars = Array.from(target.parentElement.children);
      allStars.forEach((item, index) => {
        item.style.filter =
          currentIndex >= index || index === 5
            ? "grayscale(0%)"
            : "grayscale(100%)";
      });
    };

  const ratingHoverOff = ({ target }) => {
    let allStars = Array.from(target.parentElement.children);
    allStars.forEach((item, index) =>
      index !== 5 ? item.removeAttribute("style") : null
    );
  };

  const handleSendRating =
    (item) =>
    ({ target }) => {
      if (activeTooltip) activeTooltip.style.display = "none";
      if (timeoutsId.length > 0)
        timeoutsId.forEach((item) => clearTimeout(item));
      let value = +target.attributes[0].value + 1;
      let tooltip = target.parentElement.lastElementChild;
      setActiveTooltip(tooltip);
      const { id, title, group } = item;

      const showTooltip = () => {
        tooltip.style.display = "block";
        let delTimeoutId = setTimeout(() => {
          setDelTooltipAnim(true);
          let delAnimTimeoutId = setTimeout(() => {
            tooltip.style.display = "none";
            setDelTooltipAnim(false);
            setActiveTooltip(null);
            setTimeoutsId([]);
          }, 750);
          setTimeoutsId((prev) => [...prev, delAnimTimeoutId]);
        }, 3000);
        setTimeoutsId((prev) => [...prev, delTimeoutId]);
      };
      set(
        ref(
          database,
          `ratingDishes/${id}/${currentAuthUser ? currentAuthUser.uid : null}`
        ),
        {
          id,
          group,
          title,
          points: value,
        }
      )
        .then(() => {
          setTooltip({
            text: "Your vote has been successfully counted",
          });
          showTooltip();
        })
        .catch((error) => {
          setTooltip({
            text: `Error:
            ${error.message.split(":")[1]}.
            You need to log in to rate`,
          });
          showTooltip();
        });
    };

  const getCurrentRatingData = () => {
    const getAveragePoints = (dish) => {
      let arr = [];
      for (let user in dish) {
        if (dish[user].points) {
          arr.push(dish[user].points);
        } else {
          getAveragePoints(dish[user]);
        }
      }
      let points = arr.reduce((acc, value) => acc + value) / arr.length;
      return Math.round(points);
    };
    const starCountRef = ref(database, "/ratingDishes");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      let dataArr = [];
      for (let dishId in data) {
        dataArr.push({ id: dishId, points: getAveragePoints(data[dishId]) });
      }
      setDishesRating(dataArr);
    });
  };

  const getCurrentDishesArr = () => {
    const getCurrentObj = () => {
      for (let group in dishesItemsConfig) {
        if (activeDishGroup.title === "all") return dishesItemsConfig;
        if (group === activeDishGroup.title) return dishesItemsConfig[group];
      }
    };
    const arrToRender = [];
    const getCurrentArr = (currentObj) => {
      for (let item in currentObj) {
        if (currentObj[item].id) {
          arrToRender.push(currentObj[item]);
        } else {
          getCurrentArr(currentObj[item]);
        }
      }
    };
    getCurrentArr(getCurrentObj());
    setDishesArrToRender(arrToRender);
    refDishes.current = refDishes.current.slice(0, arrToRender.length);
  };

  const getLoadStatus = () => {
    const checkImgLoad = () => {
      dispatch(checkImgLoading());
    };
    refDishes.current.forEach((item) => {
      item.children[1].addEventListener("load", checkImgLoad);
      return () => item.children[1].removeEventListener("load", checkImgLoad);
    });
  };

  const showDishItems = () => {
    const showItems = (dishesArr) => {
      dishesArr.forEach((item, index) => {
        let delay = 150 * index;
        setTimeout(() => {
          item.style.display = "block";
        }, delay);
      });
    };
    if (isImgLoaded.length >= dishesArrToRender.length)
      showItems(refDishes.current);
  };

  useEffect(() => {
    getCurrentRatingData();
  }, []);

  useEffect(() => {
    if (isFirstShow && selectedDishes.length === 1) dispatch(showBasket());
    if (selectedDishes.length === 0) dispatch(firstTimeShowBasket());
  }, [selectedDishes]);

  useEffect(() => {
    const hideRenderedItems = (dishesArr) => {
      dishesArr.forEach((item) => (item.style.display = "none"));
    };
    if (Object.keys(dishesItemsConfig).length > 0) {
      hideRenderedItems(refDishes.current);
      getCurrentDishesArr();
    }
  }, [dishesItemsConfig, activeDishGroup]);

  useEffect(() => {
    getLoadStatus();
  }, [dishesArrToRender]);

  useEffect(() => {
    showDishItems();
  }, [isImgLoaded, dishesArrToRender]);

  return (
    <>
      <TitleWrapper>
        <Title>{activeDishGroup.title} items</Title>
        <DishIconImg src={dishIconImg} alt="settings-img" />
      </TitleWrapper>
      <ItemsFlexContainer>
        {dishesArrToRender.length > 0 ? (
          dishesArrToRender.map((item) => {
            let pointsRating = dishesRating.filter(
              (rating) => rating.id === item.id
            );
            return (
              <ItemWrapper
                key={item.id}
                activeCard={selectedDishes.some((dish) => dish.id === item.id)}
                isTooltipShow={tooltip.text}
                ref={(elem) => (elem ? refDishes.current.push(elem) : null)}
              >
                <RatingWrapper onMouseOut={ratingHoverOff}>
                  {ratingConfig.map(({ id, img }, index) => (
                    <ItemRatingImg
                      key={id}
                      starPoint={index}
                      data-point={index}
                      dishPoint={
                        pointsRating.length > 0 ? pointsRating[0].points : 0
                      }
                      onMouseEnter={ratingHoverOn(index)}
                      onClick={handleSendRating(item)}
                      src={img}
                      alt="rating-img"
                    />
                  ))}
                  <TooltipContainer delTooltipAnim={delTooltipAnim}>
                    <Tooltip>{tooltip.text}</Tooltip>
                  </TooltipContainer>
                </RatingWrapper>
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
            );
          })
        ) : (
          <LoaderWrap>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </LoaderWrap>
        )}
      </ItemsFlexContainer>
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  padding-bottom: 15px;
  align-items: center;
`;

const Title = styled.h2`
  font-weight: 800;
  font-size: 24px;
  line-height: 27px;
  margin-right: 15px;
  text-transform: capitalize;
`;

const DishIconImg = styled.img`
  width: 32px;
  height: 32px;
  margin-top: -12px;
`;

const TooltipContainer = styled.div`
  position: absolute;
  top: 20px;
  left: -170px;
  width: 150px;
  text-align: center;
  z-index: 1;
  background-color: #2d9cdb;
  border-radius: 10px;
  animation-name: ${({ delTooltipAnim }) =>
    delTooltipAnim ? "delTooltip" : "showTooltip"};
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;
  display: none;

  @keyframes showTooltip {
    0% {
      transform: translateX(10px);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes delTooltip {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(10px);
      opacity: 0;
    }
  }

  &::before {
    content: "";
    position: absolute;
    right: -4px;
    top: 18%;
    width: 10px;
    height: 10px;
    background-color: #2d9cdb;
    transform: rotate(45deg);
  }
`;

const Tooltip = styled.p`
  font-size: 12px;
  padding: 8px;
  font-weight: 700;
  color: #ffffff;
  line-height: 15px;
`;

const ItemsFlexContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 675px;
  justify-content: space-between;
  animation-name: "showDishes";
  animation-duration: 700ms;
  transition-timing-function: linear;

  @keyframes showDishes {
    0% {
      transform: translateY(200px);
      opacity: 0;
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  &::after {
    content: "";
    width: 206px;
  }

  @media (max-width: 1410px) {
    width: 885px;
  }

  @media (max-width: 1280px) {
    width: 675px;
    min-height: 300px;
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

  @media (max-width: 420px) {
    max-width: 290px;
  }

  @media (max-width: 375px) {
    max-width: 260px;
  }
`;

const ItemWrapper = styled.div`
  padding-top: ${({ activeCard }) => (activeCard ? "85px" : "90px")};
  max-width: 206px;
  position: relative;
  margin-bottom: 15px;
  -webkit-tap-highlight-color: transparent;
  transition: all 420ms linear;
  display: none;
  animation-name: "showDishItem";
  animation-duration: 400ms;
  animation-timing-function: linear;

  ${({ activeCard }) =>
    activeCard &&
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

  @keyframes showDishItem {
    0% {
      opacity: 0;
      filter: blur(20px);
      transform: scale(0.5);
    }

    100% {
      opacity: 1;
      transform: scale(1);
      filter: blur(0);
    }
  }

  @media (max-width: 580px) {
    max-width: 190px;
    padding-top: ${({ activeCard }) => (activeCard ? "65px" : "70px")};
  }
`;

const RatingWrapper = styled.div`
  top: 5px;
  right: 5px;
  position: absolute;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 580px) {
    top: -3px;
  }
`;

const ItemRatingImg = styled.img`
  filter: ${({ starPoint, dishPoint }) =>
    starPoint < dishPoint ? "grayscale(0%)" : "grayscale(100%)"};
  width: 14px;
  height: 13px;
  transition: all 400ms linear;
  margin-bottom: 2px;

  &:hover {
    transform: scale(1.3, 1.3);
    transition: all 400ms linear;

    @media (max-width: 580px) {
      transform: scale(1.2, 1.2);
    }
  }

  @media (max-width: 580px) {
    margin-bottom: 1px;
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

const LoaderWrap = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  margin: 10% 0 20% 45%;

  & > div {
    position: absolute;
    top: 33px;
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background: #2d9cdb;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }

  & > div:nth-child(1) {
    left: 8px;
    animation: preloader1 0.6s infinite;
  }

  & > div:nth-child(2) {
    left: 8px;
    animation: preloader2 0.6s infinite;
  }

  & > div:nth-child(3) {
    left: 32px;
    animation: preloader2 0.6s infinite;
  }

  & > div:nth-child(4) {
    left: 56px;
    animation: preloader3 0.6s infinite;
  }

  @keyframes preloader1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes preloader2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }

  @keyframes preloader3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @media (max-width: 740px) {
    margin: 10% 0 20% 40%;
  }

  @media (max-width: 580px) {
    margin: 10% 0 20% 15%;
  }

  @media (max-width: 420px) {
    margin: 10% 0 20% 10%;
  }

  @media (max-width: 380px) {
    margin: 10% 0 20% 5%;
  }
`;

export default memo(DishesItems);
