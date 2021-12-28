import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { FC } from "react";
import Carousel from "react-material-ui-carousel";
import { productCardData } from "../ProductCard.testData";
import { ProductRow } from "../ProductRow";
import { QuantityCounter } from "./QuantityCounter";
import { ProductType } from "../types";
import { Picture } from "./Picture";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "20px",
      paddingTop: "70px",
    },
  })
);

export const Product: FC<ProductType> = ({ title, img, price }) => {
  const classes = useStyles();
  return (
    <Box overflow="hidden">
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Carousel
              animation="slide"
              indicators={false}
              autoPlay={false}
              navButtonsAlwaysVisible
            >
              <Picture img={img} title={title} />
              <Picture img={img} title={title} />
              <Picture img={img} title={title} />
              <Picture img={img} title={title} />
            </Carousel>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box minHeight="100%" maxHeight="100%" height="100%">
              <Paper
                style={{
                  padding: "40px",
                  height: "100%",
                  borderRadius: 25,
                }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} style={{ paddingLeft: "15px" }}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="h6">RS. {price}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      style={{ background: "#303030" }}
                      p="20px"
                      borderRadius={20}
                      overflow="hidden"
                    >
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Perspiciatis ipsum harum quae a blanditiis fugit pariatur
                      deserunt libero. Quaerat sunt neque natus nulla minima
                      obcaecati asperiores delectus culpa saepe quos.
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <QuantityCounter />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{ borderRadius: 50 }}
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      style={{ borderRadius: 50 }}
                    >
                      Buy Now
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <ProductRow title="Similar Products" productCardData={productCardData} />
    </Box>
  );
};
