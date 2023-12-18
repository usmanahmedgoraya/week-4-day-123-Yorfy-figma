import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import theme from "../../MUItheme";
import DropDownMenu from "../Dropdown/DropdownMenu";
import LogoComponent from "../LogoComponent";

const pages = ["Home", "NFT", "Roadmap", "About Us", "Contact Us", "Pages"];

function Navbar() {
  const colors = theme.palette;

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
        color: colors.text.black,
        padding: { xs: "4px 2px", md: "4px 45px" },
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <LogoComponent text="YORFY" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, justifyContent: "end" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
            </IconButton>
            <DropDownMenu />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                sx={{
                  my: 2,
                  color: "white",
                  textTransform: "initial",
                  fontWeight: "light",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {page}&nbsp;
                {page === "Home" || page === "Pages" ? (
                  <ArrowDropDownIcon fontSize="12px" />
                ) : (
                  ""
                )}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <IconButton sx={{ p: 0 }}>
              <Button
                sx={{
                  color: colors.text.white,
                  background: colors.primary.main,
                  padding: "8px 32px",
                  borderRadius: "8px",
                  fontWeight: 400,
                  textTransform: "initial",
                  border: "2px solid #1E50FF"
                }}
              >
                Join Us
              </Button>
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
