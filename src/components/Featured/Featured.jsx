import React from "react";
import { Box, Stack, Typography, ImageListItem } from "@mui/material";
import theme from "../../MUItheme";
import Heading from "../Heading";
import FeaturedImage from "../../assets/Featured/featured.png";
import Logo from "../../assets/Navbar/Logo.svg";
import Button from "../Button";

const Featured = () => {
  const colors = theme.palette;
  return (
    <Stack gap="2rem" >
      <Stack gap="1rem" padding={{ xs: "0rem 2rem", md: "0rem 8rem" }}>
        <Heading text="Featured" />
        <Typography
          fontSize={{ xs: "2rem", md: "3.4rem" }}
          fontWeight={700}
          textAlign={"center"}
          color={colors.text.white}
        >
          Hot Trending On This Week from Yorfy
        </Typography>
        <Typography
          fontSize={"20px"}
          fontWeight={400}
          textAlign={"center"}
          color={colors.text.disabled}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Stack>

      {/* image box*/}

      <Box
        gap={"1rem"}
        borderRadius={"16px"}
        padding={{ xs: "1rem 0.5rem", md: "2rem 2rem" }}
        margin={{ xs: "1rem 1rem", md: "4rem 3rem", sm: "2rem 4rem" }}
        sx={{ background: colors.primary.dark }}
        className="grid md:grid-cols-2 lg:grid-cols-1"

      >
        <Box className="w-full flex justify-center items-center">
          <Box width={{ xs: "13rem", sm: "20rem", md: "21rem" }} className=" lg:hidden w-full flex justify-center items-center">
            <img
              src={FeaturedImage}
              alt="centerImage"
              width={"100%"}
              style={{ boxShadow: "0px 24px 80px 0px rgba(0, 0, 0, 0.80)" }}
            />
          </Box>
        </Box>
        <Box className="w-full grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          <Box className="w-full lg:flex justify-center relative">
            <Stack gap="2rem" alignItems={"center"} width={{ md: "15rem" }} className="my-5 relative px-2 sm:px-0">
              <div className="w-full flex justify-center md:justify-start  lg:justify-center items-center">
                <ImageListItem sx={{ width: 50, height: 50 }}>
                  <img src={Logo} alt="Yorfy-logo" />
                </ImageListItem>
              </div>
              <Typography
                variant="h5"
                color={colors.text.white}
                className="w-full lg:text-center text-center md:text-left"
              >
                YorEyes #234
              </Typography>
              <Typography
                fontSize={"16px"}
                color={colors.text.disabled}
                className=" lg:text-center text-center md:text-left"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </Stack>
          </Box>

          <Box className="w-full flex justify-center items-center">
            <Box width={{ xs: "10rem", sm: "15rem", md: "18rem", lg: "21rem" }} className="hidden  lg:block">
              <img
                src={FeaturedImage}
                alt="centerImage"
                width={"100%"}
                style={{ boxShadow: "0px 24px 80px 0px rgba(0, 0, 0, 0.80)" }}
              />
            </Box>
          </Box>
          <Box className="w-full lg:flex justify-center lg:mx-4">
            <Stack gap="2rem" alignItems={"center"} width={{ md: "20rem", lg: "15rem" }} className="relative my-5 px-3 sm:px-0">
              <Typography
                variant="h5"
                color={colors.text.white}
                className="w-full lg:text-center text-center md:text-left"
              >
                Interesting with This Item?
              </Typography>
              <Typography
                fontSize={"16px"}
                color={colors.text.disabled}
                className="lg:text-center text-center md:text-left"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
              <Box className="w-full flex justify-center md:justify-start lg:justify-center items-center">
                <Button text="Buy On Open Sea" bg={colors.primary.main} />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default Featured;
