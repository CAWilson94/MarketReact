import React from "react";
import "./App.css";
import GenericCard, { fontsTheme } from "./components/GenericCard";
import { Blog } from "./components/types";
import { AppBar, CssBaseline, ThemeProvider, Toolbar } from "@mui/material";
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

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={fontsTheme}>
        <AppBar position="static" sx={{ backgroundColor: "#21B19D" }}>
          <CssBaseline />
          <Toolbar variant="regular">
            <Typography
              gutterBottom
              variant="h6"
              fontWeight={"bold"}
              
              color={"white"}
            >
              Noteworthy Quotes
            </Typography>
          </Toolbar>
        </AppBar>
        <div className="CardContainer">
          {blogListItems}
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
