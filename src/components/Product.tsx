import { Box, Container, Grid, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { productCardData } from "./ProductCard.testData";
import { ProductRow } from "./ProductRow";
import { ProductType } from "./types";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "20px",
      paddingTop: "70px",
    },
  })
);

const Picture: FC<ProductType> = ({ title, img }) => (
  <Box maxHeight="500px" minHeight="500px" display="flex">
    <Box
      overflow="hidden"
      minWidth="300px"
      minHeight="500px"
      style={{ scrollSnapAlign: "start" }}
    >
      <img
        src={img}
        alt={title}
        style={{
          objectFit: "cover",
          height: "100%",
          width: "100%",
          objectPosition: "center center",
          position: "relative",
        }}
      />
    </Box>
  </Box>
);

export const Product: FC<ProductType> = ({ title, img }) => {
  const classes = useStyles();
  return (
    <Box overflow="hidden">
      <Container maxWidth="xl" className={classes.container}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Carousel animation="slide" interval={7000} autoPlay={false}>
              <Picture img={img} title={title} />
              <Picture img={img} title={title} />
              <Picture img={img} title={title} />
              <Picture img={img} title={title} />
            </Carousel>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="h4">{title}</Typography>
          </Grid>
        </Grid>
      </Container>
      <ProductRow title="Similar Products" productCardData={productCardData} />
    </Box>
  );
};
