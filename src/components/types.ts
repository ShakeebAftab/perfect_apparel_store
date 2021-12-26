import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface MenuOpt {
  name: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  path?: string;
}

export interface BannerType {
  title: string;
  desc: string;
  img: string;
}

export interface HomeCardType {
  category: string;
  img: string;
  path: string;
}

export interface ProductCardType {
  title: string;
  img: string;
  price: number;
}

export interface HomeBannerType {
  img: string;
  title: string;
  tagline: string;
  height: string;
  buttonOneText?: string;
  buttonTwoText?: string;
  buttonOneOnClick?: () => void;
  buttonTwoOnClick?: () => void;
}
