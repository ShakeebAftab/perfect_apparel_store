import { Facebook, Instagram, Twitter, WhatsApp } from "@material-ui/icons";

import { Box, IconButton } from "@material-ui/core";
import { FC } from "react";

interface Props {
  padding?: string;
}

export const SocialMedia: FC<Props> = ({ padding }) => {
  return (
    <Box padding={padding ? padding : "15px"} overflow="hidden">
      <IconButton>
        <Facebook />
      </IconButton>
      <IconButton>
        <Instagram />
      </IconButton>
      <IconButton>
        <Twitter />
      </IconButton>
      <IconButton>
        <WhatsApp />
      </IconButton>
    </Box>
  );
};
