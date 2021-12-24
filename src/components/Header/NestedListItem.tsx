import {
  Collapse,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  SvgIconTypeMap,
  Theme,
} from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { FC } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { MenuOpt } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  })
);

interface Props {
  name: string;
  Icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  path?: string;
  nestedOpts?: MenuOpt[];
}

export const NestedListItem: FC<Props> = (props) => {
  const { name, Icon, nestedOpts, path } = props;
  const classes = useStyles();
  const navigate = useNavigate();
  const [listOpen, setListOpen] = useState(false);
  const handleClick = () => setListOpen(!listOpen);

  return (
    <>
      <ListItem
        button
        onClick={
          nestedOpts
            ? handleClick
            : () => navigate(path === "/" ? "/" : `/category/${path}`)
        }
      >
        {Icon && (
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
        )}
        <ListItemText primary={name} />
        {nestedOpts && (listOpen ? <ExpandLess /> : <ExpandMore />)}
      </ListItem>
      {nestedOpts && (
        <Collapse in={listOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {nestedOpts.map(({ name, Icon, path }: MenuOpt, idx: number) => (
              <ListItem
                button
                className={classes.nested}
                key={`${idx}`}
                onClick={() => navigate(`/category/${path}`)}
              >
                {Icon && (
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                )}
                <ListItemText primary={name} />
              </ListItem>
            ))}
          </List>
        </Collapse>
      )}
    </>
  );
};
