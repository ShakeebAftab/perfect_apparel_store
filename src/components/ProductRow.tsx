import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { FC } from "react";
import { ProductCard } from "./ProductCard";
import { ProductCardType } from "./types";

const useStyles = makeStyles({
  title: {
    marginLeft: "30px",
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
  title?: string;
  productCardData: ProductCardType[];
}

export const ProductRow: FC<Props> = ({ title, productCardData }) => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column">
      {title && (
        <Typography
          variant="h4"
          component="h2"
          color="textPrimary"
          className={classes.title}
        >
          {title}
        </Typography>
      )}
      <Box className={classes.products}>
        {productCardData.map(
          ({ title, img, price }: ProductCardType, idx: number) => (
            <ProductCard
              key={`${idx}`}
              title={title}
              img={img}
              price={price}
              margin="15px"
            />
          )
        )}
      </Box>
    </Box>
  );
};
