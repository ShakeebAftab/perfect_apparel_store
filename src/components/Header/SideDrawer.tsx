import { Dispatch, FC } from "react";

import {
  Drawer,
  List,
  Divider,
  makeStyles,
  IconButton,
  useTheme,
  Theme,
  createStyles,
  Box,
} from "@material-ui/core";

import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { NestedListItem } from "./NestedListItem";
import { SocialMedia } from "../SocialMedia";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      "&::-webkit-scrollbar": {
        display: "none",
      },
      background: "#171717",
    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
    },
    nested: {
      paddingLeft: theme.spacing(4),
    },
    drawerFooter: {
      marginTop: "auto",
    },
  })
);

interface Props {
  open: boolean;
  setOpen: Dispatch<boolean>;
}

export const SideDrawer: FC<Props> = ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerClose = () => setOpen(false);

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </div>
      <Divider />

      <List component="nav" aria-labelledby="nested-list-subheader">
        <NestedListItem name="Home" path="/" />
        <NestedListItem name="Winter Collection" path="wintercollection" />
        <NestedListItem name="Summer Collection" path="summercollection" />
        <NestedListItem
          name="Men"
          nestedOpts={[
            { name: "Jackets", path: "men/jackets" },
            { name: "Shirts", path: "men/shirts" },
            { name: "Shorts", path: "men/shorts" },
            { name: "Hoodies", path: "men/hoodies" },
          ]}
        />
        <NestedListItem
          name="Women"
          nestedOpts={[
            { name: "Jackets", path: "women/jackets" },
            { name: "Shirts", path: "women/shirts" },
            { name: "Shorts", path: "women/shorts" },
            { name: "Hoodies", path: "women/hoodies" },
          ]}
        />
      </List>
      <Box className={classes.drawerFooter}>
        <Divider />
        <SocialMedia />
      </Box>
    </Drawer>
  );
};
