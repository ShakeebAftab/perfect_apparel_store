import { Box, Grid, MenuItem, TextField, Typography } from "@material-ui/core";
import { Dispatch } from "react";
import { SelectorOptions } from "../types";

interface Props extends SelectorOptions {
  value: string;
  setValue: Dispatch<string>;
}

export const Selector = ({ name, options, value, setValue }: Props) => {
  return (
    <Box width="100%">
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
