import { useState } from "react";
import "./App.css";
import { PaginationRender } from "./components/PaginationRender";
import { DebounceSearchDemo } from "./components/DebounceSearchDemo";

export function App() {
  return (
    <>
      <PaginationRender></PaginationRender>
      <br />
      <DebounceSearchDemo></DebounceSearchDemo>
    </>
  );
}

export default App;
