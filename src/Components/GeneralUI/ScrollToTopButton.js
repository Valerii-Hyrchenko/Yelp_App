import { useEffect, useState } from "react";
import styled from "styled-components";
import arrowUp from "../../assets/icons/arrow/arrow_up.svg";

export const ScrollToTopButton = () => {
  const [isShowButton, setIsShowButton] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollHandler = (event) => {
    if (event.target.documentElement.scrollTop > window.innerHeight * 0.4) {
      setIsShowButton(true);
    }
    if (event.target.documentElement.scrollTop < 100) {
      setIsShowButton(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <ScrollToTopContainer onClick={handleScrollToTop}>
      {isShowButton ? (
        <ScrollToTopWrapper>
          <ScrollToTopArrow src={arrowUp} alt="scroll-to-top-arrow" />
        </ScrollToTopWrapper>
      ) : null}
    </ScrollToTopContainer>
  );
};

const ScrollToTopContainer = styled.div`
  position: absolute;
  right: 77px;
  cursor: pointer;

  @media (max-width: 740px) {
    right: 53px;
  }

  @media (max-width: 580px) {
    right: 60px;
  }

  @media (max-width: 360px) {
    right: 54px;
  }
`;

const ScrollToTopWrapper = styled.div`
  position: fixed;
  bottom: 55px;
  animation-name: "scrollBtn";
  animation-duration: 450ms;
  transition-timing-function: linear;

  @keyframes scrollBtn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 475px) {
    bottom: 27px;
  }
`;

const ScrollToTopArrow = styled.img`
  transition: all 250ms linear;
  &:hover {
    transition: all 250ms linear;
    filter: contrast(300%);
  }
`;
