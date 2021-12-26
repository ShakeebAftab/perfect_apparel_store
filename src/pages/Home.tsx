import { Box, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { HomeCard } from "src/components/HomeCard";
import { homeCardData } from "src/components/HomeCard.testData";
import { Slider } from "../components/Banner/Slider";
import { Header } from "../components/Header/Header";
import { HomeCardType } from "src/components/types";
import { ProductRow } from "src/components/ProductRow";
import { bannerData } from "src/components/Banner/data.testData";
import { HomeBanner } from "src/components/HomeBanner";

const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const Home = () => {
  const classes = useStyles();
  return (
    <Box overflow="hidden" mb="10px">
      <Grid container spacing={0} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Slider bannerData={bannerData} />
        </Grid>
        {homeCardData.map(({ category, img, path }: HomeCardType) => (
          <Grid
            key={category}
            item
            xs={12}
            md={6}
            lg={3}
            className={classes.slider}
          >
            <HomeCard category={category} img={img} path={path} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <ProductRow title="Our Top Products" />
        </Grid>
        <Grid item xs={12}>
          <HomeBanner
            img="https://images.unsplash.com/photo-1472806426350-603610d85659?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            height="300px"
            title="Best Quality In Pakistan"
            tagline="Shop for men and women"
            buttonOneText="Shop for men"
            buttonTwoText="Shop for women"
            buttonOneOnClick={() => {}}
            buttonTwoOnClick={() => {}}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
