import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    box: {
      background: "#303030",
    },
    btn: {
      userSelect: "none",
      "&:hover": {
        background: "#4a4a4a",
        borderRadius: 50,
      },
    },
  })
);

export const QuantityCounter = () => {
  const classes = useStyles();
  const [value, setValue] = useState(1);

  return (
    <Box
      overflow="hidden"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        className={classes.box}
        padding="5px"
        fontSize="16px"
        fontWeight="bold"
        borderRadius={50}
        width="100%"
        display="flex"
        justifyContent="space-evenly"
      >
        <Box
          p="10px"
          pl="15px"
          pr="15px"
          className={classes.btn}
          onClick={() => setValue((value) => (value > 1 ? value - 1 : value))}
        >
          -
        </Box>
        <Box p="10px">{value}</Box>
        <Box
          p="10px"
          pl="15px"
          pr="15px"
          className={classes.btn}
          onClick={() => setValue((value) => value + 1)}
        >
          +
        </Box>
      </Box>
    </Box>
  );
};
