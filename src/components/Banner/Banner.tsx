import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import { FC } from "react";
import { BannerType } from "../types";

const useStyles = makeStyles(() => ({
  fadeOut: {
    backgroundImage:
      "linear-gradient(180deg, transparent, rgba(27, 27, 27, 0.61), transparent)",
    height: "89vh",
  },
  desc: {
    lineHeight: "1.5",
  },
  button: {
    color: "white",
    paddingLeft: "1.5rem",
    paddingRight: "1.5rem",
    marginRight: "1rem",
    backgroundColor: "rgba(51, 51, 51, 0.5)",
    "&:hover": {
      color: "black",
    },
  },
}));

export const Banner: FC<BannerType> = ({ title, desc, img }) => {
  const classes = useStyles();

  const theme = useTheme();
  const breakPoint = useMediaQuery(theme.breakpoints.up("xs"));

  return (
    <Box
      overflow="hidden"
      minHeight="80vh"
      maxHeight="80vh"
      marginBottom="20px"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        objectFit: "contain",
      }}
    >
      <Box margin={0} padding={0} width="100%" className={classes.fadeOut}>
        <Grid container direction="column" spacing={breakPoint ? 8 : 10}>
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} container>
            <Grid item xs={1} />
            <Grid item>
              <Container maxWidth="sm">
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography variant="h4" component="h2" color="textPrimary">
                      {title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" className={classes.button}>
                      View
                    </Button>
                    <Button variant="contained" className={classes.button}>
                      Add To Cart
                    </Button>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body2"
                      component="h2"
                      className={classes.desc}
                      color="textPrimary"
                      align="justify"
                    >
                      {desc}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
