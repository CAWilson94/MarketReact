import React from "react";
import "./App.css";
import GenericCard from "./components/GenericCard";

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
      <GenericCard />
      <GenericCard />
      <GenericCard />
      <GenericCard />
    </div>
  );
}

export default App;
