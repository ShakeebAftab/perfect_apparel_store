import { Box, Grid } from "@material-ui/core";
import { Header } from "../components/Header";

export const Category = () => {
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
