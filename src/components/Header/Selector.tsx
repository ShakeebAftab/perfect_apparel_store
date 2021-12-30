import {
  Box,
  createStyles,
  Grid,
  makeStyles,
  MenuItem,
  TextField,
  Typography,
} from "@material-ui/core";
import { Dispatch, FC, SetStateAction } from "react";
import { SelectorOptions, SelectorOptionType } from "../types";

const useStyles = makeStyles(() =>
  createStyles({
    textField: {
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          border: "none",
        },
      },
    },
    empty: {},
  })
);

interface Props extends SelectorOptions {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  radius?: number;
  border?: boolean;
}

export const Selector: FC<Props> = ({
  name,
  options,
  value,
  setValue,
  radius,
  border,
}) => {
  const classes = useStyles();
  return (
    <Box width="100%" borderRadius={radius}>
      <Grid container spacing={1}>
        {name && (
          <Grid item xs={12}>
            <Typography variant="h6">{name}</Typography>
          </Grid>
        )}
        <Grid item xs={12}>
          <TextField
            select={true}
            variant="outlined"
            color="secondary"
            fullWidth
            size="small"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            style={{
              borderRadius: radius,
              background: "#303030",
              padding: border ? "5px" : "0px",
            }}
            SelectProps={{
              style: {
                borderRadius: radius,
                background: "#303030",
              },
              SelectDisplayProps: {
                style: {
                  background: "#303030",
                  borderRadius: radius,
                },
              },
            }}
            className={border ? classes.textField : classes.empty}
          >
            {options.map(({ key, value }: SelectorOptionType) => (
              <MenuItem key={key} value={value}>
                {key}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};
