import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import { FC } from "react";
import { useNavigate } from "react-router";
import { MenuOpt } from "./types";

export const NormListItem: FC<MenuOpt> = ({ name, Icon, path }) => {
  const navigate = useNavigate();

  return (
    <ListItem
      button
      onClick={() => navigate(path === "/" ? "/" : `/category/${path}`)}
    >
      {Icon && (
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} />
    </ListItem>
  );
};
