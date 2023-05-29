import { Drawer, Toolbar, Typography } from "@mui/material";
import React from "react";
import Styles from "./Fallback.styles";

function Fallback() {
  return (
    <Drawer variant="permanent" sx={Styles.fallback}>
      <Toolbar sx={{ paddingTop: "2rem" }} />
      <Typography sx={{ fontSize: "0.8rem" }}>Something Went Wrong!</Typography>
    </Drawer>
  );
}

export default Fallback;
