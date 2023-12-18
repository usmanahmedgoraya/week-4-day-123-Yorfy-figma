import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import logo1 from "../assets/collaboration/Logo-1.svg";
import logo2 from "../assets/collaboration/Logo-2.svg";
import logo3 from "../assets/collaboration/Logo-3.svg";
import logo from "../assets/collaboration/Logo.svg";
import theme from "../MUItheme";
import Heading from "./Heading";

const Collaboration = () => {
  const colors = theme.palette;
  return (
    <Stack gap={"2rem"}>
      <Stack gap={"1.5rem"}>
        <Heading text="Collaboration" />
        <Typography variant="h2" textAlign="center" color={colors.text.white}>
          Our Partners
        </Typography>
      </Stack>

      <Stack
        direction={"row"}
        gap={"2.5rem"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Box component="img" alt="logo" src={logo} width={"250px"} />
        <Box component="img" alt="logo" src={logo1} width={"250px"} />
        <Box component="img" alt="logo" src={logo2} width={"250px"} />
        <Box component="img" alt="logo" src={logo3} width={"250px"} />
      </Stack>
    </Stack>
  );
};

export default Collaboration;
