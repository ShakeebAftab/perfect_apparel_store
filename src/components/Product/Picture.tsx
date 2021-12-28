import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { FC } from "react";
import { ProductType } from "../types";

const useStyles = makeStyles(() =>
  createStyles({
    img: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
      objectPosition: "center center",
      borderRadius: 25,
    },
  })
);

export const Picture: FC<Omit<ProductType, "price">> = ({ title, img }) => {
  const classes = useStyles();
  return (
    <Box maxHeight="500px" minHeight="500px" display="flex">
      <Box overflow="hidden" minWidth="300px" minHeight="500px">
        <img src={img} alt={title} className={classes.img} />
      </Box>
    </Box>
  );
};
