import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface MenuOpt {
  name: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  path?: string;
}

export interface HomeCardType {
  category: string;
  img: string;
  path: string;
}
export interface HomeBannerType {
  img: string;
  title: string;
  tagline: string;
  height: string;
  buttonOneText: string;
  buttonTwoText: string;
  buttonOneOnClick: () => void;
  buttonTwoOnClick: () => void;
}
export interface SelectorOptionType {
  key: string;
  value: string;
}

export interface SelectorOptions {
  name?: string;
  options: SelectorOptionType[];
}

export interface ProductType {
  id: string;
  title: string;
  imgs: string[];
  price: number;
  desc: string;
  bullets: string[];
}
