import React from "react";
import "../App.css";
import { fontsTheme } from "./GenericCard";
import {
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  IconButton,
  Menu,
  ThemeProvider,
  Toolbar,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";


const pages: string[] = ["Latest", "Blog", "About"]; // ideally stored somewhere with router

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
      <ThemeProvider theme={fontsTheme}>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            padding: "10px",
          }}
        >
          <Container maxWidth="xl">
            <CssBaseline />
            <Toolbar
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontWeight={"bold"} color={"#21B19D"}>
                  Noteworthy Quotes
                </Typography>
              </Box>
              <Box
                sx={{
                  display: {
                    xs: "flex",
                    md: "none",
                    alignSelf: "end",
                    justifyContent: "end",
                    paddingBottom: "4px",
                  },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon style={{ color: "black", alignSelf: "end" }} />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "center",
                    horizontal: "center",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/*The actual headers on full page */}
              <Box
                sx={{
                  display: {
                    xs: "none",
                    md: "flex",
                    alignSelf: "end",
                    justifyContent: "center ",
                    gap: "20px",
                  },
                }}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, display: "block", color: "black" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

export default NavBar;
