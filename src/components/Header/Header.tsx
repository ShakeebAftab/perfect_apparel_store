import { useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Menu, ShoppingCartOutlined } from "@material-ui/icons";
import { SideDrawer } from "./SideDrawer";

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

export const Header = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => setOpen(true);
  const [show, setShow] = useState(false);

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
        color={show ? "primary" : "transparent"}
        elevation={0}
      >
        <Toolbar variant="dense">
          <Typography variant="h6" noWrap className={classes.title}>
            Perfect Apparel
          </Typography>
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
    </div>
  );
};
