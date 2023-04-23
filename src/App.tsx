import React from "react";
import "./App.css";
import GenericCard, { fontsTheme } from "./components/GenericCard";
import { Blog } from "./components/types";
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

const latestBlogPosts: Blog[] = [
  {
    author: "Andy Weir",
    imageSource: "../blis1.png",
    readingTime: 3,
    blogSource: "Example The Martain Blog Source Here",
    headerText:
      "How come Aquaman can control whales? They’re mammals! Makes no sense.",
  },
  {
    author: "Jake The Dog",
    imageSource: "../blis1.png",
    readingTime: 3,
    blogSource: "Example Adventure Time Blog Source Here",
    headerText: "Bad Biscuits make the baker broke, bro.",
  },
  {
    author: "Quendale - Centaur World",
    imageSource: "../blis1.png",
    readingTime: 3,
    blogSource: "Example Centaur World Blog Source Here",
    headerText: "A sash is a sideways belt on its way to a party",
  },
];

const blogListItems = latestBlogPosts.map((item) => (
  <GenericCard
    author={item.author}
    headerText={item.headerText}
    readingTime={item.readingTime}
  />
));

const pages: string[] = ["Latest", "Blog", "About"];

function App() {
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
    <div className="App">
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
            <Toolbar style={{display: "flex", justifyContent:"space-between"}}>
              <Box sx={{ display: "flex", justifyContent:"space-between", alignItems: "center"}}>
              <Typography 
                variant="h6"
                fontWeight={"bold"}
                color={"#21B19D"}
              >
                Noteworthy Quotes
              </Typography>
              </Box>
              <Box sx={{display: { xs: "flex", md: "none", alignSelf: "end", justifyContent: "end"} }}>
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
              <Box sx={{display: { xs: "none", md: "flex", alignSelf:"end", justifyContent: "center ", gap:"20px" } }}>
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
        <div
          style={{
            height: "20px",
            backgroundColor: "#21B19D",
          }}
        ></div>
        <div className="CardContainer" style={{ backgroundColor: "#F6F6F6" }}>
          {blogListItems}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
