import { Box, makeStyles, Paper, Theme, Typography } from "@material-ui/core";
import { FC } from "react";
import { useNavigate } from "react-router";
import { HomeCardType } from "./types";

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    paddingTop: "5px",
    paddingBottom: "5px",
    paddingLeft: "30px",
    paddingRight: "30px",
    marginBottom: "60px",
  },
  box: {
    height: "400px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    transition: theme.transitions.create(["background", "cursor", "opacity"], {
      duration: 1000,
    }),
    "&:hover": {
      background: "#000",
      opacity: 0.6,
      cursor: "pointer",
    },
  },
}));

export const HomeCard: FC<HomeCardType> = ({ category, img, path }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <Box
      margin={0}
      padding={0}
      overflow="hidden"
      minHeight="400px"
      height="400px"
      width="100%"
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        objectFit: "contain",
      }}
      display="flex"
      justifyContent="center"
      alignItems="flex-end"
    >
      <Box
        className={classes.box}
        p={0}
        m={0}
        overflow="hidden"
        onClick={() => navigate(`/category/${path}`)}
      >
        <Paper className={classes.paper} elevation={8}>
          <Typography variant="h6" color="textPrimary">
            {category}
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
};
