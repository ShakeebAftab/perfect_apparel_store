import { FC } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ProductCardType } from "./types";
import { Button, CardActions } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "250px",
    minWidth: "250px",
    margin: "30px",
    marginTop: "5px",
    marginBottom: "5px",
    borderRadius: 20,
  },
  cardContent: {
    marginTop: "-12px",
    padding: "20px",
    paddingBottom: "0px",
  },
  price: {
    marginTop: "-10px",
  },
  cardAction: {
    paddingTop: "8px",
    paddingLeft: "18px",
    paddingBottom: "16px",
  },
});

export const ProductCard: FC<ProductCardType> = ({ title, img, price }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={`${title} image`}
          height="300px"
          image={img}
          title={title}
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            component="p"
            className={classes.price}
          >
            RS. {price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button
          size="small"
          color="secondary"
          variant="outlined"
          disableElevation
        >
          Buy Now
        </Button>
        <Button
          size="small"
          color="secondary"
          disableElevation
          variant="outlined"
        >
          Add to cart
        </Button>
      </CardActions>
    </Card>
  );
};