import styled from "styled-components";

export const BurgerMenuBtn = ({
  isBurgerCheckboxChecked,
  setIsBurgerCheckboxChecked,
}) => {
  const handleBurgerSwitch = () => setIsBurgerCheckboxChecked((prev) => !prev);

  return (
    <BurgerMenuBtnWrapper isBurgerCheckboxChecked={isBurgerCheckboxChecked}>
      <BurgerCheckbox
        id="burger-checkbox"
        checked={isBurgerCheckboxChecked}
        onChange={handleBurgerSwitch}
        type="checkbox"
      />
      <BurgerAnimationWrapper>
        <BurgerAnimation />
      </BurgerAnimationWrapper>
    </BurgerMenuBtnWrapper>
  );
};

const BurgerMenuBtnWrapper = styled.div`
  position: absolute;
  top: 24px;
  left: 30px;
  box-sizing: border-box;
  display: none;
  z-index: ${(props) => (props.isBurgerCheckboxChecked ? 15 : 5)};
  animation-name: "showBurgerBtn";
  animation-duration: 700ms;
  transition-timing-function: linear;
  justify-content: space-between;

  @keyframes showBurgerBtn {
    0% {
      opacity: 0;
      transform: translateY(-100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 1080px) {
    display: block;
  }

  @media (max-width: 580px) {
    top: 15px;
    left: 23px;
  }

  ${(props) =>
    props.isBurgerCheckboxChecked &&
    `${BurgerAnimationWrapper}{
      &::before {
        transform: translateY(14px) rotate(135deg);

        @media (max-width: 580px) {
          transform: translateY(13px) rotate(134deg);
        }
      },
      &::after {
        transform: translateY(-12px) rotate(-135deg);
        
        @media (max-width: 580px) {
          transform: translateY(-9px) rotate(-134deg);
        }
      },
      & div {
        transform: scale(1);
        background-color:transparent;
      }
  }`}
`;

const BurgerCheckbox = styled.input`
  width: 45px;
  height: 40px;
  opacity: 0;
  position: relative;
  z-index: 8;
  margin: 0;
  cursor: pointer;

  @media (max-width: 580px) {
    width: 35px;
  }
`;

const BurgerAnimationWrapper = styled.div`
  position: absolute;
  width: 45px;
  top: 0;
  left: 0;

  @media (max-width: 580px) {
    width: 35px;
  }

  &::before,
  &::after,
  & div {
    background: #2d9cdb;
    content: "";
    display: block;
    height: 6px;
    border-radius: 3px;
    margin: 7px 0;
    transition: all 300ms linear;

    @media (max-width: 580px) {
      margin: 5px 0;
    }
  }
`;

const BurgerAnimation = styled.div``;
