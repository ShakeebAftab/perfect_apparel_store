import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";
import { HomeBannerType } from "./types";

const useStyles = makeStyles(() => ({
  fadeOut: {
    background: "rgba(27, 27, 27, 0.61)",
  },
  tagline: {
    lineHeight: "1.5",
  },
  buttonOne: {
    marginRight: "5px",
  },
  buttonTwo: {
    marginLeft: "5px",
  },
}));

export const HomeBanner: FC<HomeBannerType> = ({
  title,
  tagline,
  img,
  height,
  buttonOneText,
  buttonTwoText,
}) => {
  const classes = useStyles();

  return (
    <Box
      overflow="hidden"
      minHeight={height}
      maxHeight={height}
      style={{
        background: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        objectFit: "contain",
      }}
    >
      <Box
        margin={0}
        padding={0}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        className={classes.fadeOut}
        height={height}
      >
        <Box
          padding="20px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{tagline}</Typography>
          <Box display="flex" mt="10px">
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonTwo}
            >
              {buttonOneText}
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonTwo}
            >
              {buttonTwoText}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
