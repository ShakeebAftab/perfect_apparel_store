import { Dispatch, FC, useState } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@material-ui/core";
import { ChevronLeft } from "@material-ui/icons";

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

interface Props {
  open: boolean;
  setOpen: Dispatch<boolean>;
}

export const SearchModal: FC<Props> = ({ open, setOpen }) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

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
            <Typography variant="h6">Search</Typography>
          </Box>
          <Divider />
          <Box padding="20px">
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    placeholder="Type item name"
                    size="small"
                    label="Search"
                    InputProps={{ style: { borderRadius: 15 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    type="submit"
                    color="secondary"
                    fullWidth
                    className={classes.btn}
                  >
                    Search
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
