import { Box, Grid } from "@material-ui/core";
import { Header } from "../components/Header";

export const Home = () => {
  return (
    <Box overflow="hidden">
      <Grid container>
        <Grid item xs={12}>
          <Header />
        </Grid>
      </Grid>
    </Box>
  );
};
