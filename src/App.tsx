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
        flexWrap: "nowrap",
        alignItems: "stretch",
        gap: "30px",
      }}
    >
      <GenericCard title="Bad biscuits make the baker broke, bro" readingTime={1} headerText="How come Aquaman can control whales? They’re mammals! Makes no sense.”  ― Andy Weir, The Martian"/>
      <GenericCard headerText="ANZ travellers are planning to spend more than A$1.7B on their Easter escape this month"/>
      <GenericCard title="A sash is a sideways belt on its way to a party" readingTime={10} headerText="In the beginning the Universe was created. This has made a lot of people very angry and been widely regarded as a bad move."/>
    </div>
  );
}

export default App;
