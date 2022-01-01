import { Dispatch, FC, useContext, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";
import { Selector } from "../Header/Selector";
import { availableSizes } from "src/HardCoded/data";
import { QuantityCounter } from "../Product/QuantityCounter";
import { CartContext } from "src/providers/CartContext";
import { ProductType } from "../types";

const getModalStyle = () => {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: "absolute",
      width: "370px",
      maxHeight: "55vh",
      overflow: "auto",
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      outline: "none",
      borderRadius: 25,
    },
    btn: {
      borderRadius: 50,
    },
  })
);

interface Props extends ProductType {
  open: boolean;
  setOpen: Dispatch<boolean>;
}

export const OptionsModal: FC<Props> = ({
  id,
  title,
  imgs,
  desc,
  bullets,
  price,
  open,
  setOpen,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [size, setSize] = useState(availableSizes[0].value);
  const [quantity, setQuantity] = useState(1);
  const { addNewProduct } = useContext(CartContext);

  const handleAddToCart = () => {
    addNewProduct({
      id,
      title,
      imgs,
      desc,
      bullets,
      price,
      size,
      quantity,
    });
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <Box>
          <Box display="flex" p="10px" alignItems="center">
            <IconButton onClick={() => setOpen(false)}>
              <ChevronLeft />
            </IconButton>
            <Typography variant="h6">Options</Typography>
          </Box>
          <Divider />
          <Box padding="20px">
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Selector
                    options={availableSizes}
                    value={size}
                    setValue={setSize}
                    radius={50}
                    border
                  />
                </Grid>
                <Grid item xs={12}>
                  <QuantityCounter value={quantity} setValue={setQuantity} />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    color="secondary"
                    fullWidth
                    className={classes.btn}
                    onClick={() => handleAddToCart()}
                  >
                    Add to Cart
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </div>
    </Modal>
  );
};
