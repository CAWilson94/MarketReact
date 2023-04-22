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

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#F6F6F6",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        alignItems: "baseline",
        gap: "20px",
      }}
    >
      <GenericCard title="Bad biscuits make the baker broke, bro"/>
      <GenericCard />
      <GenericCard title="A sash is a sideways belt on its way to a party"/>
    </div>
  );
}

export default App;
