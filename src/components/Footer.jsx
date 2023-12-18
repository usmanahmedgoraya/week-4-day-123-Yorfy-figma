import { Stack, Typography } from "@mui/material";
import React from "react";
import theme from "../MUItheme";
import LogoComponent from "./LogoComponent";

const socialMedia = ["Fb", "Lg","Li", "Yt"];
const Footer = () => {
  const colors = theme.palette;
  return (
    <Stack gap={"2rem"}>
      <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
        <LogoComponent text="YORFY" />
        <Stack direction={"row"} gap={"15px"}>
          {socialMedia.map((media) => {
            return (
              <Typography
                key={media}
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  fontWeight: 400,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  color: colors.text.white,
                  textDecoration: "none",
                  borderRadius: "50%",
                  fontSize: "0.8rem",
                  width: "2rem",
                  height: "2rem",
                  border: "1px solid white",
                }}
              >
                {media}
              </Typography>
            );
          })}
        </Stack>
      </Stack>
      <hr style={{ border: `1px solid ${colors.primary.main}` }} />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        color={colors.text.white}
      >
        <Typography>&copy; 2023 Yorfy Template. All Rights Reserved</Typography>
        <Typography>Made With Love Usman Ahmed</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
