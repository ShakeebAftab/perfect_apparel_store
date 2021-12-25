import { Box, Grid, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { HomeCard } from "src/components/HomeCard";
import { homeCardData } from "src/components/HomeCard.testData";
import { Slider } from "../components/Banner/Slider";
import { Header } from "../components/Header/Header";
import { HomeCardType } from "src/components/types";

const useStyles = makeStyles((theme: Theme) => ({
  slider: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  grid: {
    marginTop: "-20px",
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
          <Slider />
        </Grid>
        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="center"
          className={classes.grid}
        >
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
        </Grid>
      </Grid>
    </Box>
  );
};
