import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
} from "@material-ui/core";
import { LineStyle, Menu, ShoppingCartOutlined } from "@material-ui/icons";
import { SideDrawer } from "./SideDrawer";
import { FilterDrawer } from "./FilterDrawer";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    iconButton: {
      marginLeft: "2px",
      marginRight: "2px",
    },
  })
);

interface Props {
  categoryPage?: boolean;
  productPage?: boolean;
}

export const Header: FC<Props> = ({ categoryPage, productPage }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const [show, setShow] = useState(false);
  const [filterDrawer, setFilterDrawer] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setShow(window.scrollY > 100));
    return window.removeEventListener("scroll", () => {});
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
        color={productPage ? "primary" : show ? "primary" : "transparent"}
        elevation={0}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap className={classes.title}>
            Perfect Apparel
          </Typography>
          {categoryPage && (
            <IconButton
              color="inherit"
              edge="end"
              className={classes.iconButton}
              onClick={() => setFilterDrawer(true)}
            >
              <LineStyle />
            </IconButton>
          )}
          <IconButton color="inherit" edge="end" className={classes.iconButton}>
            <ShoppingCartOutlined />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(classes.iconButton, open && classes.hide)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideDrawer open={open} setOpen={setOpen} />
      <FilterDrawer open={filterDrawer} setOpen={setFilterDrawer} />
    </div>
  );
};
