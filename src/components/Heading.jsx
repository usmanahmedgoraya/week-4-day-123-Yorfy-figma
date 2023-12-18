import React from "react";
import { Typography } from "@mui/material";
import theme from "../MUItheme";

const SectionHeading = ({ text, align = "center",className="" }) => {
  const colors = theme.palette;
  return (
    <Typography color={colors.primary.light} fontWeight={700} textAlign={align} className={`${className}`}>
      {text}
    </Typography>
  );
};

export default SectionHeading;
