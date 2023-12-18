import React from "react";
import { Typography, ImageListItem, Stack } from "@mui/material";
import Logo from "../assets/Navbar/Logo.svg";
import theme from "../MUItheme";

const LogoComponent = ({ text, notNone = true }) => {
  const colors = theme.palette;
  return (
    <Stack direction={"row"} alignItems={"center"} gap={"10px"}>
      <ImageListItem sx={{ width: 40, height: 40 }}>
        <img src={Logo} alt="Yorfy-logo" />
      </ImageListItem>

      {
        text === "YORFY" ? (
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", sm: "flex" },
              fontWeight: 700,
              letterSpacing: "0.1rem",
              fontSize: { xs: "1rem", sm: "1.4rem" },
              textDecoration: "none",
              color: colors.text.white,
            }}
          >
            {text}
          </Typography>) : (
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { sm: "flex" },
              fontWeight: 700,
              letterSpacing: "0.1rem",
              fontSize: { xs: "1rem", sm: "1.4rem" },
              textDecoration: "none",
              color: colors.text.white,
            }}
          >
            {text}
          </Typography>
        )
      }
    </Stack>
  );
};

export default LogoComponent;
