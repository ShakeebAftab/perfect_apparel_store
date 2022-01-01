import { FC, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { ProductType } from "../types";
import { Button, CardActions } from "@material-ui/core";
import { useNavigate } from "react-router";
import { OptionsModal } from "./OptionsModal";

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
    paddingRight: "18px",
  },
  btn: {
    borderRadius: 50,
    fontWeight: 600,
  },
});

interface Props extends ProductType {
  margin?: string;
  width?: string;
  marginTop?: string;
  marginBottom?: string;
  height?: string;
}

export const ProductCard: FC<Props> = ({
  id,
  title,
  imgs,
  price,
  desc,
  bullets,
  margin,
  width,
  marginTop,
  marginBottom,
  height,
}) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [optsOpen, setOptsOpen] = useState(false);

  const navi = () => {
    navigate(`/product/${title}`, {
      state: {
        id,
        title,
        desc,
        bullets,
        price,
        imgs,
      },
    });
  };

  return (
    <>
      <Card
        className={classes.root}
        style={{
          margin: margin ? margin : "30px",
          minWidth: width ? width : "250px",
          maxWidth: width ? width : "250px",
          marginTop: marginTop ? marginTop : "5px",
          marginBottom: marginBottom ? marginBottom : "5px",
        }}
      >
        <CardActionArea onClick={() => navi()}>
          <CardMedia
            component="img"
            alt={`${title} image`}
            height={height ? height : "300px"}
            image={imgs[0]}
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
            variant="contained"
            disableElevation
            fullWidth
            className={classes.btn}
          >
            Buy Now
          </Button>
          <Button
            size="small"
            color="inherit"
            disableElevation
            variant="outlined"
            fullWidth
            className={classes.btn}
            onClick={() => setOptsOpen(true)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
      <OptionsModal
        open={optsOpen}
        setOpen={setOptsOpen}
        id={id}
        title={title}
        imgs={imgs}
        price={price}
        desc={desc}
        bullets={bullets}
      />
    </>
  );
};
