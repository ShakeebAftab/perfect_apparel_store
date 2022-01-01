import { Box, Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header/Header";
import { Product as ProductComponent } from "src/components/Product/Product";
import { ProductType } from "src/components/types";

export const Product = () => {
  const location = useLocation();
  const state = location.state as ProductType;

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
            id={state.id}
            title={state.title}
            imgs={state.imgs}
            price={state.price}
            desc={state.desc}
            bullets={state.bullets}
          />
        </Grid>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </Box>
  );
};
