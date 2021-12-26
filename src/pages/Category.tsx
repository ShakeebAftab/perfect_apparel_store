import { Box, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { bannerData } from "src/components/Banner/data.testData";
import { Slider } from "src/components/Banner/Slider";
import { ProductCard } from "src/components/ProductCard";
import { productCardData } from "src/components/ProductCard.testData";
import { ProductCardType } from "src/components/types";
import { Header } from "../components/Header/Header";

export const Category = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box overflow="hidden" mb="10px">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Slider bannerData={bannerData} />
        </Grid>
        <Grid
          item
          xs={12}
          container
          spacing={2}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {productCardData.map(({ title, img, price }: ProductCardType) => (
            <Grid item>
              <ProductCard
                title={title}
                img={img}
                price={price}
                height="200px"
                margin="5px"
                marginTop="0px"
                marginBottom="0px"
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
