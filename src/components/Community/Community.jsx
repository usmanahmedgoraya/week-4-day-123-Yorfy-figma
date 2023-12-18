import React from "react";
import { Typography, Stack, Grid, Box } from "@mui/material";
import theme from "../../MUItheme";
import Heading from "../Heading";
import Buttton from "../Button";

const CommunitySlider = () => {
  const colors = theme.palette;
  return (
    <Box display="flex" flexDirection="column" alignItems="center" height={300} className="mt-16 mr-4">
      <Box
        bgcolor={colors.primary.dark}
        color="white"
        sx={{
          zIndex: 12,
          opacity: 1,
          boxShadow: "0px 0px 20px 8px rgba(0, 0, 0, 0.8)",
          borderRadius: "8px",
        }}
        padding={2}
        marginBottom={1}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={{ xs: "2rem", sm: "8rem" }}
        >
          <Stack direction="row" gap={"1rem"}>
            <Box
              width="3rem"
              height="3rem"
              sx={{ background: "white", borderRadius: "50%" }}
            ></Box>
            <Stack gap="0.2rem">
              <Typography variant={"h6"} color={colors.text.white}>
                ShooParDie
              </Typography>
              <Typography fontSize={"0.6rem"} color={colors.text.white}>
                Last Online 2 hours ago
              </Typography>
            </Stack>
          </Stack>
          <Typography fontSize="1.2rem">...</Typography>
        </Stack>
      </Box>

      <Box
        bgcolor={colors.primary.dark}
        color="white"
        sx={{
          zIndex: 11,
          opacity: 0.9,
          boxShadow: "0px 0px 20px 6px rgba(0, 0, 0, 0.8)",
          borderRadius: "8px",
        }}
        padding={2}
        marginBottom={1}
        marginLeft={{ xs: 0, sm: 3 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={{ xs: "2rem", sm: "8rem" }}
        >
          <Stack direction="row" gap={"1rem"}>
            <Box
              width="3rem"
              height="3rem"
              sx={{ background: "white", borderRadius: "50%" }}
            ></Box>
            <Stack gap="0.2rem">
              <Typography variant={"h6"} color={colors.text.white}>
                ShooParDie
              </Typography>
              <Typography fontSize={"0.6rem"} color={colors.text.white}>
                Last Online 2 hours ago
              </Typography>
            </Stack>
          </Stack>
          <Typography fontSize="1.2rem">...</Typography>
        </Stack>
      </Box>
      <Box
        bgcolor={colors.primary.dark}
        color="white"
        sx={{
          zIndex: 10,
          opacity: 0.5,
          boxShadow: "0px 0px 20px 6px rgba(0, 0, 0, 0.8)",
          borderRadius: "8px",
        }}
        padding={2}
        marginBottom={1}
        marginLeft={{ xs: 0, sm: 6 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          gap={{ xs: "2rem", sm: "8rem" }}
        >
          <Stack direction="row" gap={"1rem"}>
            <Box
              width="3rem"
              height="3rem"
              sx={{ background: "white", borderRadius: "50%" }}
            ></Box>
            <Stack gap="0.2rem">
              <Typography variant={"h6"} color={colors.text.white}>
                ShooParDie
              </Typography>
              <Typography fontSize={"0.6rem"} color={colors.text.white}>
                Last Online 2 hours ago
              </Typography>
            </Stack>
          </Stack>
          <Typography fontSize="1.2rem">...</Typography>
        </Stack>
      </Box>
    </Box>
  );
};

const Community = () => {
  const colors = theme.palette;
  return (
    <Grid
      container
      justifyContent={"space-between"}
      padding={{ xs: "1rem 1.5rem", md: "4rem 8rem 4rem 4rem" }}
    >
      <Grid
        xs={12}
        md={4}
        item
        marginY={"3rem"}
        alignItems={"center"}
        margin="auto"
        className=" md:hidden"
      >
        <CommunitySlider />
      </Grid>

      <div className="w-full justify-center items-center mb-16">
        <Heading text="Community" align={{ xs: "center", sm: "center", md: "center", lg: "left" }} />
      </div>
      <Box className="grid lg:grid-cols-2 place-items-center">

        <Grid item xs={10} md={12}>
          <Stack gap={"1.6rem"} className="w-full flex justify-center lg:justify-left text-center lg:text-left">

            <Typography
              fontSize={{ xs: "2rem", md: "3.5rem" }}
              fontWeight={700}
              color={colors.text.white}
            >
              Join Our Community and Get Many Benefits
            </Typography>
            <Typography
              color={colors.text.disabled}
              fontSize="17px"
              fontWeight={300}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Box className="w-full flex justify-center lg:justify-start items-center">
              <Buttton text="Join Discord" bg={colors.primary.main} className="max-w-xs" />
            </Box>
          </Stack>
        </Grid>
        <Grid
          xs={12}
          md={4}
          item
          marginY={"3rem"}
          alignItems={"center"}
          margin="auto"
          className="hidden md:grid"
        >
          <CommunitySlider />
        </Grid>
      </Box>
    </Grid>
  );
};

export default Community;
