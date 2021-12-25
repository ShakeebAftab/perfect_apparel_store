import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FC } from "react";
import { ProductCard } from "./ProductCard";
import { productCardData } from "./ProductCard.testData";
import { ProductCardType } from "./types";

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "20px",
  },

  products: {
    display: "flex",
    padding: "20px",
    overflowY: "hidden",
    overflowX: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});

interface Props {
  title: string;
}

export const ProductRow: FC<Props> = ({ title }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      <Typography
        variant="h4"
        component="h2"
        color="textPrimary"
        className={classes.title}
      >
        {title}
      </Typography>
      <Box className={classes.products}>
        {productCardData.map(({ title, img, price }: ProductCardType) => (
          <ProductCard title={title} img={img} price={price} />
        ))}
      </Box>
    </Box>
  );
};
