import { Home } from "../Components/GeneralUI/GeneralPageParts/Home";
import { Menu } from "../Components/GeneralUI/GeneralPageParts/Menu";
import Settings from "../Components/GeneralUI/GeneralPageParts/Settings";
import { Trending } from "../Components/GeneralUI/GeneralPageParts/Trending";
import { LeftBarMenu } from "../Components/GeneralUI/GeneralPageParts/LeftBarMenu";
import styled from "styled-components";
import { menuConfig } from "../Components/allConfigsConst";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserProfileData } from "../redux/actions";

export const GeneralPage = () => {
  const {
    currentAuthUser: { currentAuthUser },
    activeLeftBarPosition: { activeLeftBarPosition },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const renderCurrentPart = () => {
    switch (activeLeftBarPosition.id) {
      case menuConfig[0].id:
        return <Home />;
      case menuConfig[1].id:
        return <Menu />;
      case menuConfig[2].id:
        return <Settings />;
      case menuConfig[3].id:
        return <Trending />;
      default:
        return <Menu />;
    }
  };

  useEffect(() => {
    if (currentAuthUser === null) {
      localStorage.setItem("authUser", JSON.stringify(null));
    } else {
      localStorage.setItem("authUser", JSON.stringify(currentAuthUser));
      dispatch(getUserProfileData(currentAuthUser.uid));
    }
  }, [currentAuthUser]);

  return (
    <GeneralPageFlexWrapper>
      <LeftBarMenu />
      <GeneralUIContainer>{renderCurrentPart()}</GeneralUIContainer>
    </GeneralPageFlexWrapper>
  );
};

const GeneralPageFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const GeneralUIContainer = styled.div`
  border-radius: 40px;
  background-color: #fff;
  padding: 50px 55px 21px 60px;
  position: relative;

  @media (max-width: 740px) {
    padding: 50px 30px 21px 50px;
  }

  @media (max-width: 580px) {
    padding: 50px 25px 21px 25px;
  }

  @media (max-width: 420px) {
    padding: 40px 20px 20px;
  }
`;
