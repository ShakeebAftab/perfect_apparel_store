import { Box } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import { FC, useState } from "react";
import { ProductType } from "../types";

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

export const Picture: FC<Omit<ProductType, "price">> = ({ title, img }) => {
  const classes = useStyles();
  const [xCord, setXCord] = useState(0);
  const [yCord, setYCord] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const setCordinates = (x: number, y: number) => {
    setXCord(x);
    setYCord(y);
    console.log(x);
    console.log(y);
  };
  return (
    <Box maxHeight="500px" minHeight="500px" display="flex">
      <Box
        overflow="hidden"
        minWidth="300px"
        minHeight="500px"
        borderRadius={25}
      >
        <img
          src={img}
          alt={title}
          className={classes.img}
          onMouseMove={(e) =>
            setCordinates(
              e.pageX - e.currentTarget.getBoundingClientRect().left,
              e.pageY - e.currentTarget.getBoundingClientRect().top
            )
          }
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          style={{
            objectPosition: isHovering
              ? `${-xCord}px ${-yCord}px`
              : "center center",
            height: isHovering ? `200%` : "100%",
            width: isHovering ? `200%` : "100%",
          }}
        />
      </Box>
    </Box>
  );
};
