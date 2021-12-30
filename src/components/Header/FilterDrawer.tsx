import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Theme,
  useTheme,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import { createStyles, makeStyles } from "@material-ui/styles";
import { Dispatch, FC, useState } from "react";
import { SocialMedia } from "../SocialMedia";
import {
  colorOptionsData,
  priceOptionsData,
  sizeOptionsData,
} from "../../HardCoded/data";
import { Selector } from "./Selector";

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

export const FilterDrawer: FC<Props> = ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const handleDrawerClose = () => setOpen(false);
  const [value, setValue] = useState(colorOptionsData[0].value);
  const [size, setSize] = useState(sizeOptionsData[0].value);
  const [price, setPrice] = useState(priceOptionsData[0].value);

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
        <ListItem>
          <Selector
            name="Color"
            options={colorOptionsData}
            value={value}
            setValue={setValue}
            radius={50}
          />
        </ListItem>
        <ListItem>
          <Selector
            name="Size"
            options={sizeOptionsData}
            value={size}
            setValue={setSize}
            radius={50}
          />
        </ListItem>
        <ListItem>
          <Selector
            name="Price"
            options={priceOptionsData}
            value={price}
            setValue={setPrice}
            radius={50}
          />
        </ListItem>
      </List>
      <Box className={classes.drawerFooter}>
        <Divider />
        <SocialMedia />
      </Box>
    </Drawer>
  );
};
