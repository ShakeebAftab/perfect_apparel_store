import { Box, Grid } from "@material-ui/core";
import { Slider } from "../components/Slider";
import { Header } from "../components/Header/Header";

export const Home = () => {
  return (
    <Box overflow="hidden">
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Slider />
        </Grid>
      </Grid>
    </Box>
  );
};
