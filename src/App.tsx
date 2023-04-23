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
import NavBar from "./components/NavBar";

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
        <NavBar/>
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
