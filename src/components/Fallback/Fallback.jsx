import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import Styles from "./Fallback.styles";

function Fallback() {
  return (
    <Box sx={Styles.fallback}>
      <Toolbar sx={Styles.toolbar} />
      <Typography sx={Styles.content}>Something Went Wrong!</Typography>
    </Box>
  );
}

export default Fallback;
