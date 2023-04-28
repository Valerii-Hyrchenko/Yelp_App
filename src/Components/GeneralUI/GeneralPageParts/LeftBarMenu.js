import { useState } from "react";
import LeftBarPositions from "../LeftBarPositions";
import Avatar from "../Avatar";
import { BurgerMenuBtn } from "../BurgerMenuBtn";
import SignUpAccount from "../SignUpAccount";
import FasterDelivery from "../FasterDelivery";
import styled from "styled-components";
import { useSelector } from "react-redux";

export const LeftBarMenu = () => {
  const [isBurgerCheckboxChecked, setIsBurgerCheckboxChecked] = useState(false);
  const currentAuthUser = useSelector(
    (state) => state.currentAuthUser.currentAuthUser
  );

  const handleLeftBarSwitcher = () =>
    setIsBurgerCheckboxChecked((prev) => !prev);
  return (
    <>
      <LeftBarWrapper isBurgerCheckboxChecked={isBurgerCheckboxChecked}>
        <LeftBarOutsideSpace onClick={handleLeftBarSwitcher} />
        <LeftBarContainer>
          {currentAuthUser ? <Avatar /> : <SignUpAccount />}
          <LeftBarPositions
            isBurgerCheckboxChecked={isBurgerCheckboxChecked}
            setIsBurgerCheckboxChecked={setIsBurgerCheckboxChecked}
          />
          <FasterDelivery />
        </LeftBarContainer>
      </LeftBarWrapper>
      <BurgerMenuBtn
        isBurgerCheckboxChecked={isBurgerCheckboxChecked}
        setIsBurgerCheckboxChecked={setIsBurgerCheckboxChecked}
      />
    </>
  );
};

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
