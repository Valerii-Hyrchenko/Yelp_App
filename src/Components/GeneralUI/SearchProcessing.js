import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  updateSearchResult,
  firstTimeHideBasket,
  updateBasket,
} from "../../redux/actions";
import { dishesConfig } from "../allConfigsConst";

export const SearchProcessing = ({ isSearchDeleted }) => {
  const [timerId, setTimerId] = useState("");
  const dispatch = useDispatch();
  const isFirstBasketShow = useSelector(
    (state) => state.isFirsTimeBasketShow.isFirstShow
  );
  const searchResultArr = useSelector(
    (state) => state.searchResult.searchResult
  );
  const selectedDishes = useSelector(
    (state) => state.basketProcessing.selectedDishes
  );

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      textOfSearch: "",
    },
    onSubmit: (values) => {
      const textToSearch = values.textOfSearch.trim().toLowerCase();
      if (textToSearch) goToSearch(textToSearch);
    },
  });

  const handleCheckDish = (item) => {
    if (isFirstBasketShow) dispatch(firstTimeHideBasket());
    dispatch(updateBasket(item));
  };

  const handleFormChange = ({ target }) => {
    const { value } = target;
    if (timerId) clearTimeout(timerId);
    setTimerId(
      setTimeout(() => {
        if (value) goToSearch(value);
      }, 1500)
    );
  };

  const goToSearch = (textToSearch) => {
    const searchResult = dishesConfig.filter((item) =>
      item.title.toLowerCase().includes(textToSearch, 0)
    );
    dispatch(updateSearchResult(searchResult));
  };

  return (
    <SearchProcessingWrapper isSearchDeleted={isSearchDeleted}>
      <SearchForm onChange={handleFormChange} onSubmit={handleSubmit}>
        <SearchInput
          onChange={handleChange}
          value={values["textOfSearch"]}
          name="textOfSearch"
          id="search"
          type="text"
          placeholder="enter dish name"
          autoComplete="off"
        />
        <SearchButton type="submit">Search</SearchButton>
      </SearchForm>
      {searchResultArr.length > 0 ? (
        <SearchResultWrapper>
          {searchResultArr.map((item) => (
            <SearchItemContainer key={item.id}>
              <SearchItemImg src={item.img} alt="item_icon" />
              <SearchItemTitleWrap>
                <SearchItemTitle>{item.title}</SearchItemTitle>
              </SearchItemTitleWrap>
              <SearchItemPrice>${item.price}</SearchItemPrice>
              <SearchCheckboxWrapper>
                <SearchCheckboxLabel>
                  <SearchCheckbox
                    onChange={() => handleCheckDish(item)}
                    type="checkbox"
                    defaultChecked={
                      selectedDishes.some((dish) => dish.id === item.id)
                        ? true
                        : false
                    }
                  />
                  <SearchCheckboxSpan id="animate_checkbox" />
                </SearchCheckboxLabel>
              </SearchCheckboxWrapper>
            </SearchItemContainer>
          ))}
        </SearchResultWrapper>
      ) : null}
    </SearchProcessingWrapper>
  );
};

const SearchProcessingWrapper = styled.div`
  position: absolute;
  z-index: 15;
  top: 0;
  left: -115px;

  animation-name: ${(props) =>
    props.isSearchDeleted ? "hideSearch" : "showSearch"};
  animation-duration: 800ms;
  transition-timing-function: ease-in-out;

  @keyframes showSearch {
    0% {
      opacity: 0;
      transform: translateX(-800px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes hideSearch {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      transform: translateX(-800px);
      opacity: 0;
    }
  }

  @media (max-width: 1410px) {
    left: -254px;
  }

  @media (max-width: 410px) {
    top: 48px;
  }

  @media (max-width: 360px) {
    left: -234px;
  }
`;

const SearchResultWrapper = styled.div`
  padding: 55px 25px 15px;
  background-color: #f3f3f3;
  max-width: 253px;
  border-radius: 15px;
  margin-top: -30px;
  box-shadow: 0px 3px 20px 6px rgba(0, 0, 0, 0.75);

  animation-name: "showResult";
  animation-duration: 500ms;
  transition-timing-function: ease-in-out;

  @keyframes showResult {
    0% {
      opacity: 0;
      transform: translateX(-800px);
      position: relative;
      z-index: -10;
    }

    100% {
      opacity: 1;
      transform: translateX(0);
      position: relative;
      z-index: -10;
    }
  }

  @media (max-width: 740px) {
    max-width: 245px;
  }

  @media (max-width: 360px) {
    max-width: 224px;
  }
`;

const SearchItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4px;
  margin-bottom: 10px;
  border-bottom: 1px dashed #000;

  @media (max-width: 740px) {
    font-size: 15px;
    padding-bottom: 2px;
    margin-bottom: 8px;
  }
`;

const SearchItemImg = styled.img`
  max-width: 11%;
`;

const SearchItemTitleWrap = styled.div`
  width: 145px;
  height: 35px;
`;

const SearchItemTitle = styled.p`
  padding-top: 10px;
`;

const SearchItemPrice = styled.p`
  width: 38px;
`;

const SearchCheckboxWrapper = styled.div`
  box-sizing: border-box;
  margin-top: -8px;
`;

const SearchCheckboxLabel = styled.label`
  display: block;
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const SearchCheckboxSpan = styled.span`
  display: block;
  width: inherit;
  height: inherit;
  border: 3px solid #434343;
  border-radius: 6px;
  transition: all 0.375s;
`;

const SearchCheckbox = styled.input`
  visibility: hidden;
  display: none;

  &:checked ~ #animate_checkbox {
    transform: rotate(45deg);
    width: 8px;
    margin-top: -10px;
    margin-left: 6px;
    border-color: #24c78e;
    border-top-color: transparent;
    border-left-color: transparent;
    border-radius: 0;
  }
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`;

const SearchButton = styled.button`
  padding: 8px;
  border: 1px solid transparent;
  border-radius: 15px;
  background-color: #2d9cdb;
  color: #fff;
  cursor: pointer;
  transition: 400ms all linear;

  &:hover {
    background-color: #fff;
    color: #2d9cdb;
    border: 1px solid #2d9cdb;
    transition: 400ms all linear;
  }

  @media (max-width: 360px) {
    font-size: 12px;
  }
`;

const SearchInput = styled.input`
  box-sizing: border-box;
  padding: 15px 100px 16px 15px;
  border-radius: 15px;
  font-size: 18px;
  border: none;
  background: #f3f3f3;
  outline: none;
  margin-right: -92px;
  width: 280px;
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
    rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
    rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  &:focus {
    box-shadow: 0px 3px 20px 6px rgba(0, 0, 0, 0.75);
  }

  @media (max-width: 740px) {
    padding: 12px 100px 11px 15px;
    font-size: 15px;
  }

  @media (max-width: 360px) {
    padding: 12px 95px 11px 10px;
    width: 265px;
  }
`;
