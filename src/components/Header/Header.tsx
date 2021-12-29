import { FC, useEffect, useState } from "react";
import clsx from "clsx";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  IconButton,
  Typography,
  Box,
} from "@material-ui/core";
import {
  LineStyle,
  Menu,
  Search,
  ShoppingCartOutlined,
} from "@material-ui/icons";
import { SideDrawer } from "./SideDrawer";
import { FilterDrawer } from "./FilterDrawer";

import logo from "../../static/logo.png";
import { useNavigate } from "react-router";
import { SearchModal } from "./SearchModal";

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
      marginLeft: "1px",
      marginRight: "1px",
    },
    logo: {
      width: "100%",
      height: "40px",
      objectFit: "contain",
      paddingTop: "5px",
      cursor: "pointer",
    },
    toolBar: {
      justifyContent: "space-between",
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
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

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
        <Toolbar variant="dense" className={classes.toolBar}>
          <Typography onClick={() => navigate("/")}>
            <img src={logo} alt={logo} className={classes.logo} />
          </Typography>
          <Box>
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
            <IconButton
              color="inherit"
              edge="end"
              className={classes.iconButton}
              onClick={() => setSearchOpen(true)}
            >
              <Search />
            </IconButton>
            <IconButton
              color="inherit"
              edge="end"
              className={classes.iconButton}
            >
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
          </Box>
        </Toolbar>
      </AppBar>
      <SideDrawer open={open} setOpen={setOpen} />
      <FilterDrawer open={filterDrawer} setOpen={setFilterDrawer} />
      <SearchModal open={searchOpen} setOpen={setSearchOpen} />
    </div>
  );
};
