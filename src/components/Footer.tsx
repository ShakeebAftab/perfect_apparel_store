import { Box, Grid, Typography } from "@material-ui/core";
import { Mail, Phone } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import { SocialMedia } from "./SocialMedia";

import logo from "../static/logo.png";

const useStyles = makeStyles({
  box: {
    background: "#171717",
  },
  icon: {
    marginRight: "5px",
  },
  logo: {
    width: "100%",
    height: "40px",
    objectFit: "contain",
  },
});

export const Footer = () => {
  const classes = useStyles();
  return (
    <Box
      overflow="hidden"
      padding="30px"
      paddingBottom="10px"
      paddingTop="15px"
      className={classes.box}
    >
      <Grid container spacing={1} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <Box
            p="15px"
            pb="0"
            pl="12px"
            pr="15px"
            display="flex"
            flexDirection="column"
            alignItems="center"
            textAlign="center"
          >
            <Typography>
              <img src={logo} alt={logo} className={classes.logo} />
            </Typography>
            <Box display="flex">
              <Mail className={classes.icon} />
              <Typography variant="body2">
                perfectapparelstore@gmail.com
              </Typography>
            </Box>
            <Box display="flex">
              <Phone className={classes.icon} />
              <Typography variant="body2">+92-322-4885-948</Typography>
            </Box>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center">
            <SocialMedia padding="0" />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="caption" color="textSecondary">
              Copyright &copy; {new Date().getFullYear()} Perfect Apparel Store
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
