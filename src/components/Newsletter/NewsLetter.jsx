import { Stack, TextField, Typography } from "@mui/material";
import React from "react";
import theme from "../../MUItheme";
import Buttton from "../Button";
import Heading from "../Heading";

const NewsLetter = () => {
  const colors = theme.palette;
  return (
    <Stack
      padding={{ xs: "1rem 2rem", md: "4rem 12rem" }}
      sx={{ background: colors.primary.dark, borderRadius: "16px" }}
    >
      <Stack
        color={colors.text.white}
        alignItems={"center"}
        gap={"2rem"}
        justifyContent={"center"}
      >
        <Heading text={"Newsletter"} />
        <Typography
          fontSize={{ xs: "1.4rem", md: "40px" }}
          fontWeight={700}
          textAlign={"center"}
        >
          You Do Not Want to Miss Out on this!
        </Typography>
        <Typography color={colors.text.disabled} textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent={"center"}
        gap={{ xs: "1rem", sm: "2rem" }}
        sx={{ margin: "0.5rem" }}
      >
        <TextField
          id="outlined-basic"
          variant="outlined"
          sx={{
            input: {
              color: colors.text.white,
              "&::placeholder": {
                color: colors.text.white,
                opacity: 1,
              },
            },
            outlineColor: colors.text.white,
            borderRadius: "6px",
            outline: "1px solid white",
            flexGrow: 1,
          }}
          className="mt-8"
          placeholder="Please Enter Your Email..."
        />
        <Buttton text="Click To Submit" bg={colors.primary.main} />
      </Stack>
    </Stack>
  );
};

export default NewsLetter;
