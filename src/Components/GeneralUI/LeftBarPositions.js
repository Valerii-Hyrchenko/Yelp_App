import { memo } from "react";
import styled from "styled-components";
import { menuConfig } from "../allConfigsConst";
import { useDispatch, useSelector } from "react-redux";
import { selectActiveMenuPosition } from "../../redux/actions";

const LeftBarPositions = ({
  isBurgerCheckboxChecked,
  setIsBurgerCheckboxChecked,
}) => {
  const dispatch = useDispatch();
  const activeLeftBarPosition = useSelector(
    (state) => state.activeLeftBarPosition.activeLeftBarPosition
  );

  const changeActiveItem = (item) => {
    dispatch(selectActiveMenuPosition(item));
    if (isBurgerCheckboxChecked) setIsBurgerCheckboxChecked(false);
  };

  return (
    <MenuWrapper>
      <MenuNav>
        <MenuList>
          {menuConfig.map((item) => (
            <Item
              key={item.id}
              onClick={() => changeActiveItem(item)}
              active={item.id === activeLeftBarPosition.id}
            >
              <IconWrap>
                <Icon src={item.img} alt={`${item.title}-icon`} />
              </IconWrap>
              <ItemNameContainer>
                <ItemName>{item.title}</ItemName>
              </ItemNameContainer>
            </Item>
          ))}
        </MenuList>
      </MenuNav>
    </MenuWrapper>
  );
};

const MenuWrapper = styled.div`
  max-width: 184px;
`;

const MenuNav = styled.nav``;

const MenuList = styled.ul``;

const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => (props.active ? "#FF5454" : "#eaf1fe")};
  border-radius: 15px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  animation-name: ${(props) => (props.active ? "showMenuBar" : "")};
  animation-duration: 500ms;
  transition-timing-function: linear;

  &:not(:last-child) {
    margin-bottom: 40px;

    @media (max-width: 1080px) {
      margin-bottom: 25px;
    }
  }

  ${(props) =>
    props.active &&
    `
    ${ItemName}{
      color: #FFF;
    }
    ${IconWrap}{
      background-color: #DF4545;
    }
    ${Icon}{
      filter: brightness(0) invert(1);
    }
  `}

  @keyframes showMenuBar {
    0% {
      max-width: 46px;
      opacity: 0;
    }

    100% {
      max-width: 184px;
      opacity: 1;
    }
  }
`;

const ItemNameContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ItemName = styled.span`
  list-style-type: none;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #919191;
  transition: all 200ms linear;
`;

const IconWrap = styled.div`
  min-width: 46px;
  min-height: 44px;
  position: relative;
  background-color: #fff;
  border-radius: 15px;
  transition: all 200ms linear;
`;

const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 200ms linear;
`;

export default memo(LeftBarPositions);
