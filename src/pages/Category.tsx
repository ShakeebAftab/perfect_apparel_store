import { Box, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useEffect } from "react";
import { bannerData } from "src/components/Banner/data.testData";
import { Slider } from "src/components/Banner/Slider";
import { Footer } from "src/components/Footer";
import { ProductCard } from "src/components/ProductCard/ProductCard";
import { ProductType } from "src/components/types";
import { Header } from "../components/Header/Header";
import { productData } from "./ProductPage.testData";

const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    marginTop: theme.spacing(-2),
  },
}));

export const Category = () => {
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box overflow="hidden">
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Header categoryPage={true} />
        </Grid>
        <Grid item xs={12} className={classes.slider}>
          <Slider bannerData={bannerData} />
        </Grid>
        {productData.map(
          (
            { id, title, imgs, price, desc, bullets }: ProductType,
            idx: number
          ) => (
            <Grid item key={`${idx}`}>
              <ProductCard
                id={id}
                title={title}
                imgs={imgs}
                price={price}
                desc={desc}
                bullets={bullets}
                height="300px"
                margin="5px"
                marginTop="0px"
                marginBottom="0px"
                width="350px"
              />
            </Grid>
          )
        )}
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
