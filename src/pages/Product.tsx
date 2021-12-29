import { Box, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header/Header";
import { Product as ProductComponent } from "src/components/Product/Product";
import { productData } from "./ProductPage.testData";

export const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Box overflow="hidden">
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Header productPage />
        </Grid>
        <Grid item xs={12}>
          <ProductComponent
            title={productData.title}
            imgs={productData.imgs}
            price={productData.price}
            desc={productData.desc}
            bullets={productData.bullets}
          />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
