import Slider from "react-slick";
import { dbRef } from "../../../base";
import styled from "styled-components";
import { child, get } from "firebase/database";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderArrow from "../../../assets/icons/arrow/arrow_prev_next.svg";

export const Home = () => {
  const [sliderConfig, setSliderConfig] = useState([]);
  const sliderSettings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 581,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const getSliderConfig = () => {
    get(child(dbRef, `/sliderConfig`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let sliderConfigObj = snapshot.val();
          setSliderConfig(convertToArr(sliderConfigObj));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const convertToArr = (sliderConfigObj) => {
    const sliderConfigArr = [];
    for (let item in sliderConfigObj) {
      if (sliderConfigObj[item].id) {
        sliderConfigArr.push(sliderConfigObj[item]);
      } else {
        convertToArr(sliderConfigObj[item]);
      }
    }
    return sliderConfigArr;
  };

  useEffect(() => {
    getSliderConfig();
  }, []);

  return (
    <HomeContainer>
      <StyledSlider {...sliderSettings}>
        {sliderConfig.map((item) => (
          <ImgWrapper key={item.id}>
            <SlideImg src={item.img} alt="slide_img" />
          </ImgWrapper>
        ))}
      </StyledSlider>
      <CafeDescriptionWrapper>
        <RestaurantTitle>Best Yelp Restaurant in your town</RestaurantTitle>
        <RestaurantDescription>
          The delicious restaurant is situated on a very busy street in the town
          center. On its left-hand side is a mosque and on the right an
          entertainment club which makes no apologies for the loud noise it
          makes every evening. It is relatively large compared to the
          restaurants within its proximity and occupies a two-storied building.
          The restaurant offers high-quality services to its customers in form
          of efficiency, effectiveness, and high standards of hygiene. As a
          result, it is popular among people from all walks of life. There is
          also a good blend of music that is played in the restaurant. During
          most early evenings, the restaurant plays slow classical music which
          favors most of the customers who need a relaxing environment after
          work.
        </RestaurantDescription>
        <ContactsFlexContainer>
          <ContactsWrapper>
            <ContactsTitle>Our address:</ContactsTitle>
            <Contacts>54000, Ukraine, Mykolayiv, ave.Myru, 999</Contacts>
          </ContactsWrapper>
          <ContactsWrapper>
            <ContactsTitle>
              Call us from 8:00 a.m. to 8:00 p.m. at:
            </ContactsTitle>
            <Contacts>+(38) 099 999 999</Contacts>
            <Contacts>+(38) 088 888 888</Contacts>
            <Contacts>+(38) 077 777 777</Contacts>
          </ContactsWrapper>
        </ContactsFlexContainer>
      </CafeDescriptionWrapper>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 1005px;

  @media (max-width: 1410px) {
    width: 885px;
  }

  @media (max-width: 1280px) {
    width: 675px;
  }

  @media (max-width: 870px) {
    width: 550px;
  }

  @media (max-width: 740px) {
    width: 425px;
    margin-top: 40px;
  }

  @media (max-width: 580px) {
    width: 340px;
  }

  @media (max-width: 420px) {
    width: 305px;
  }

  @media (max-width: 375px) {
    width: 260px;
  }
`;

const StyledSlider = styled(Slider)`
  animation-name: "showSlider";
  animation-duration: 800ms;
  transition-timing-function: linear;

  @keyframes showSlider {
    0% {
      opacity: 0;
      transform: translateY(-200px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  .slick-list {
    width: 920px !important;
    height: 300px !important;

    @media (max-width: 1410px) {
      width: 825px !important;
      height: 267px !important;
    }

    @media (max-width: 1280px) {
      width: 450px !important;
      height: 300px !important;
    }

    @media (max-width: 740px) {
      width: 350px !important;
      margin-left: -15px;
      height: 234px !important;
    }

    @media (max-width: 580px) {
      margin-left: 0;
    }

    @media (max-width: 420px) {
      width: 300px !important;
      height: 200px !important;
    }

    @media (max-width: 375px) {
      width: 280px !important;
      height: 187px !important;
    }
  }
  .slick-dots {
    bottom: -40px;
  }
  .slick-prev {
    left: -48px;
    width: 40px;
    height: 40px;

    @media (max-width: 740px) {
      left: -65px;
    }
  }
  .slick-prev::before {
    content: url(${sliderArrow});
  }
  .slick-next {
    width: 40px;
    height: 40px;
    transform: rotate(180deg);
    right: -48px;
    top: 130px;

    @media (max-width: 1410px) {
      top: 115px;
    }

    @media (max-width: 1280px) {
      top: 130px;
    }

    @media (max-width: 740px) {
      top: 100px;
    }
  }
  .slick-next::before {
    content: url(${sliderArrow});
  }
  .slick-dots li button::before {
    font-size: 10px;
    color: #0271b0;

    @media (max-width: 375px) {
      font-size: 8px;
    }
  }
`;

const ImgWrapper = styled.div`
  outline: none;
`;

const SlideImg = styled.img`
  width: 450px;

  @media (max-width: 1410px) {
    width: 400px;
  }

  @media (max-width: 1280px) {
    width: 450px;
  }

  @media (max-width: 740px) {
    width: 350px;
  }

  @media (max-width: 420px) {
    width: 300px;
  }

  @media (max-width: 375px) {
    width: 280px;
  }
`;

const CafeDescriptionWrapper = styled.div`
  margin-top: 80px;
  animation-name: "showDescription";
  animation-duration: 800ms;
  transition-timing-function: linear;

  @keyframes showDescription {
    0% {
      opacity: 0;
      transform: translateY(200px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const RestaurantTitle = styled.h2`
  font-size: 38px;
  font-weight: 900;
  margin-bottom: 40px;
  color: #0271b0;

  @media (max-width: 580px) {
    font-size: 30px;
  }

  @media (max-width: 420px) {
    max-width: 240px;
    margin: 0 auto 40px;
    text-align: center;
  }
`;

const RestaurantDescription = styled.p`
  line-height: 20px;
`;

const ContactsFlexContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 30px;

  @media (max-width: 1280px) {
    justify-content: space-between;
  }

  @media (max-width: 580px) {
    flex-direction: column;
    align-items: center;
    row-gap: 40px;
  }
`;

const ContactsWrapper = styled.div`
  @media (max-width: 1280px) {
    max-width: 250px;
  }

  @media (max-width: 740px) {
    max-width: 210px;
  }

  @media (max-width: 580px) {
    max-width: 80%;
  }
`;

const ContactsTitle = styled.h3`
  font-weight: 900;
  color: #0271b0;

  @media (max-width: 1280px) {
    line-height: 22px;
  }

  @media (max-width: 580px) {
    text-align: center;
    width: 200px;
    margin: 0 auto;
  }
`;

const Contacts = styled.p`
  margin-top: 20px;
  font-weight: 900;

  @media (max-width: 740px) {
    margin-top: 10px;
    line-height: 20px;
  }

  @media (max-width: 580px) {
    text-align: center;
  }
`;
