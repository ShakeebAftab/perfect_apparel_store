import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";

export interface MenuOpt {
  name: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  path?: string;
}
