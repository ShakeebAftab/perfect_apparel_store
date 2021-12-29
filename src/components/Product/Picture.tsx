import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { FC } from "react";

const useStyles = makeStyles(() =>
  createStyles({
    img: {
      objectFit: "cover",
      height: "100%",
      width: "100%",
      objectPosition: "center center",
      borderRadius: 25,
    },
  })
);

interface Props {
  title: string;
  img: string;
  height: string;
}

export const Picture: FC<Props> = ({ title, img, height }) => {
  const classes = useStyles();

  return (
    <Box maxHeight={height} minHeight={height} display="flex">
      <Box
        overflow="hidden"
        minWidth="300px"
        minHeight="500px"
        borderRadius={25}
      >
        <img src={img} alt={title} className={classes.img} />
      </Box>
    </Box>
  );
};
