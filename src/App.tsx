import React from "react";
import "./App.css";
import GenericCard from "./components/GenericCard";
import { Blog } from "./components/types";

const whatsNewData: Blog[] = [
  {
    author: "Charlotte A. Wilson",
    imageSource: "../blis1.png",
    readingTime: 3,
    blogSource: "Example Blog Source Here",
    headerText: "Header Text Example",
  },
];

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
    <div
      className="App"
      style={{
        backgroundColor: "#F6F6F6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "nowrap",
        alignItems: "stretch",
        gap: "30px",
      }}
    >
      {blogListItems}
    </div>
  );
}

export default App;
