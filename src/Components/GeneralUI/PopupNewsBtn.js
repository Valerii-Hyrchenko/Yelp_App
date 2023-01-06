import styled from "styled-components";
import showNewsIcon from "../../assets/icons/show_news/show_news.svg";

export const PopupNewsBtn = ({
  isNewsCheckboxChecked,
  setIsNewsCheckboxChecked,
}) => {
  const handleCheckboxSwitch = () => setIsNewsCheckboxChecked((prev) => !prev);

  return (
    <PopupNewsWrapper>
      <PopupNewsCheckbox
        onChange={handleCheckboxSwitch}
        id="news-popup"
        type="checkbox"
        checked={isNewsCheckboxChecked}
      />
      <PopupAnimateWrap isNewsCheckboxChecked={isNewsCheckboxChecked}>
        <PopupAnimateElem />
        <PopupAnimateIcon src={showNewsIcon} alt="news-icon" />
        <PopupAnimateElem position="bottom" />
      </PopupAnimateWrap>
    </PopupNewsWrapper>
  );
};

const PopupNewsWrapper = styled.div`
  width: 46px;
  height: 46px;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 740px) {
    width: 35px;
  }
`;

const PopupNewsCheckbox = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 10;
  top: 4px;
  left: 0;
  margin: 0;
  opacity: 0;
  cursor: pointer;
`;

const PopupAnimateWrap = styled.div`
  position: relative;
  z-index: 6;
  ${(props) =>
    props.isNewsCheckboxChecked &&
    `${PopupAnimateElem} {
        opacity: 1;
        background-color: #2d9cdb;

        &:first-of-type {
        transform: rotate(45deg) translate(19px, 19px);

          @media (max-width: 740px) {
            transform: rotate(45deg) translate(18px, 17px);;
          }
        }


        &:last-of-type {
        transform: rotate(-45deg) translate(19px, -19px);

        @media (max-width: 740px) {
            transform: rotate(-45deg) translate(13px, -13px);;
          }
        }
      }

      ${PopupAnimateIcon} {
        opacity: 0;
      }
  `}
`;

const PopupAnimateElem = styled.div`
  height: 5px;
  width: 100%;
  border-radius: 2px;
  background-color: #000;
  opacity: 0;
  transition: all 400ms linear;
`;

const PopupAnimateIcon = styled.img`
  transition: all 250ms linear;

  @media (max-width: 740px) {
    width: 35px;
  }
`;
