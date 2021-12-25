import Carousel from "react-material-ui-carousel";
import { BannerType } from "../types";
import { Banner } from "./Banner";
import { bannerData } from "./data.testData";

export const Slider = () => {
  return (
    <Carousel
      indicators={false}
      swipe={true}
      animation="slide"
      cycleNavigation={true}
      interval={7000}
    >
      {bannerData.map(({ title, desc, img }: BannerType) => (
        <Banner key={title} title={title} desc={desc} img={img} />
      ))}
    </Carousel>
  );
};
