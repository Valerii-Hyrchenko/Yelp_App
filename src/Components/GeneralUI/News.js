import styled from "styled-components";
import arrow from "../../assets/img/delivery/arrow.svg";
import { newsConfig } from "../allConfigsConst";

export const News = () => {
  return (
    <NewsContainer>
      <TitleFlexContainer>
        <NewsTitle>Articles</NewsTitle>
        <ArrowWrapper>
          <ArrowImg src={arrow} alt="arrow_img" />
        </ArrowWrapper>
      </TitleFlexContainer>
      {newsConfig.map(
        ({ id, icon, background, title, miniAva, miniLike, likeCount }) => (
          <ItemFlexContainer key={id}>
            <ItemAvaWrap background={background}>
              <ItemIcon src={icon} alt="news-icon" />
            </ItemAvaWrap>
            <ItemContentWrap>
              <ItemTitle>{title}</ItemTitle>
              <ItemReactionWrap>
                {miniAva.map(({ id, miniAva }) => (
                  <ItemReactionIcon key={id} src={miniAva} alt="mini-ava" />
                ))}
                <ItemLikeContainer>
                  <ItemReactionIcon src={miniLike} alt="mini-like" />
                  <ItemLikeCount>{likeCount}+</ItemLikeCount>
                </ItemLikeContainer>
              </ItemReactionWrap>
            </ItemContentWrap>
          </ItemFlexContainer>
        )
      )}
    </NewsContainer>
  );
};

const NewsContainer = styled.div`
  margin-top: 30px;
`;

const TitleFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

const NewsTitle = styled.p`
  font-weight: 800;
  font-size: 24px;
  line-height: 27px;
`;

const ArrowWrapper = styled.div`
  padding: 20px;
  background: #f5f6f7;
  border-radius: 15px;
`;

const ArrowImg = styled.img``;

const ItemFlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 18px;
`;

const ItemAvaWrap = styled.div`
  min-width: 60px;
  min-height: 60px;
  background-color: ${(props) => props.background};
  border-radius: 15px;
  position: relative;
  margin-right: 13px;
`;

const ItemIcon = styled.img`
  max-width: 60px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ItemContentWrap = styled.div``;

const ItemTitle = styled.p`
  font-weight: 700;
  font-size: 12px;
  line-height: 18px;

  @media (max-width: 480px) {
    font-size: 10px;
    line-height: 16px;
  }
`;

const ItemReactionWrap = styled.div`
  display: flex;
  align-items: center;
`;

const ItemReactionIcon = styled.img`
  &:last-of-type {
    margin-left: -5px;
  }
`;

const ItemLikeContainer = styled.div`
  padding: 4px 11px 4px 8px;
  background: #fff8d5;
  border: 1px solid #ffffff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  margin-left: -5px;
`;

const ItemLikeCount = styled.p`
  margin: 2px 0 0 6px;
  font-weight: 500;
  font-size: 10px;
`;
