import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import "./App.css";
import theme from "./MUItheme";
import Collaboration from "./components/Collaboration";
import Community from "./components/Community";
import Discount from "./components/Discount";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Collection from "./components/Collection";
function App() {
  const colors = theme.palette;
  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          borderRadius: "0px",
          background: colors.secondary.main,
          padding: "0 !important",
        }}
      >
        <Navbar />
        <Main />
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Discount />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Featured />
        </Box>
        <Collection />
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Community />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Discount />
        </Box>
        <Box sx={{ margin: "5rem 0", padding: "0" }}>
          <Collaboration />
        </Box>
        <Box
          sx={{ margin: "5rem 0" }}
          padding={{ xs: "1rem 1rem", md: "4rem 4.5rem" }}
        >
          <NewsLetter />
        </Box>
        <Box
          sx={{ margin: "5rem 0" }}
          padding={{ xs: "1rem 1rem", md: "4rem 4.5rem" }}
        >
          <Footer />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
