import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { ProductType } from "../types";
import { Banner } from "./Banner";

interface Props {
  bannerData: ProductType[];
}

export const Slider: FC<Props> = ({ bannerData }) => {
  return (
    <Carousel
      indicators={false}
      swipe={true}
      animation="slide"
      cycleNavigation={true}
      interval={7000}
    >
      {bannerData.map(
        ({ id, title, desc, imgs, price, bullets }: ProductType) => (
          <Banner
            key={id}
            id={id}
            title={title}
            desc={desc}
            imgs={imgs}
            price={price}
            bullets={bullets}
          />
        )
      )}
    </Carousel>
  );
};
