import { Box, Grid, MenuItem, TextField, Typography } from "@material-ui/core";
import { Dispatch, FC } from "react";
import { SelectorOptions } from "../types";

interface Props extends SelectorOptions {
  value: string;
  setValue: Dispatch<string>;
  radius?: number;
}

export const Selector: FC<Props> = ({
  name,
  options,
  value,
  setValue,
  radius,
}) => {
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
            style={{ borderRadius: radius }}
            SelectProps={{
              style: {
                borderRadius: radius,
              },
            }}
          >
            {options.map((opt: string) => (
              <MenuItem key={opt} value={opt}>
                {opt}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </Box>
  );
};
