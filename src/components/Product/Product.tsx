import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { FC, useContext, useEffect, useRef, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { ProductRow } from "../ProductRow";
import { QuantityCounter } from "./QuantityCounter";
import { ProductType } from "../types";
import { Picture } from "./Picture";
import { Selector } from "../Header/Selector";
import { availableSizes } from "../../HardCoded/data";
import { CartContext } from "src/providers/CartContext";
import { productData } from "src/pages/ProductPage.testData";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: "20px",
      paddingTop: "70px",
    },
    slider: {
      height: "100%",
    },
    ul: {
      margin: 0,
      padding: 0,
      paddingLeft: "15px",
    },
    btn: {
      borderRadius: 50,
      fontWeight: 600,
    },
    box: {
      background: "#303030",
    },
    paper: {
      padding: "40px",
      height: "100%",
      borderRadius: 25,
    },
  })
);

export const Product: FC<ProductType> = ({
  id,
  title,
  imgs,
  price,
  desc,
  bullets,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.only("xs"));
  const ref = useRef<any>();
  const [height, setHeight] = useState(0);
  const { addNewProduct } = useContext(CartContext);
  const [size, setSize] = useState(availableSizes[0].value);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (breakpoint) return setHeight(600);
    setHeight(ref.current.clientHeight < 600 ? 600 : ref.current.clientHeight);
  }, [breakpoint]);

  const handleAddToCart = () => {
    addNewProduct({
      id,
      title,
      imgs,
      price,
      desc,
      bullets,
      quantity,
      size,
    });
  };

  return (
    <Box overflow="hidden">
      <Container maxWidth="lg" className={classes.container}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={6} style={{ height: `${height}px` }}>
            <Carousel
              animation="slide"
              indicators={false}
              autoPlay={false}
              navButtonsAlwaysVisible
              className={classes.slider}
            >
              {imgs.map((img: string, idx: number) => (
                <Picture
                  key={`${idx}`}
                  img={img}
                  title={title}
                  height={`${height - 20}px`}
                />
              ))}
            </Carousel>
          </Grid>
          <Grid item xs={12} md={4} ref={ref}>
            <Box minHeight="100%" maxHeight="100%" height="100%">
              <Paper className={classes.paper}>
                <Grid container spacing={2}>
                  <Grid item xs={12} style={{ paddingLeft: "15px" }}>
                    <Typography variant="h4">{title}</Typography>
                    <Typography variant="h6">RS. {price}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      className={classes.box}
                      p="20px"
                      borderRadius={20}
                      overflow="hidden"
                      minHeight={breakpoint ? "0px" : "200px"}
                    >
                      {desc}
                      <ul className={classes.ul}>
                        {bullets.map((bullet: string, idx: number) => (
                          <li key={`${idx}`}>{bullet}</li>
                        ))}
                      </ul>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="outlined"
                      fullWidth
                      className={classes.btn}
                    >
                      Size Chart
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="outlined"
                      fullWidth
                      className={classes.btn}
                    >
                      Reviews
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Selector
                      options={availableSizes}
                      value={size}
                      setValue={setSize}
                      radius={50}
                      border
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <QuantityCounter value={quantity} setValue={setQuantity} />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.btn}
                      onClick={() => handleAddToCart()}
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Button
                      variant="contained"
                      fullWidth
                      className={classes.btn}
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
      <ProductRow title="Similar Products" productCardData={productData} />
    </Box>
  );
};
