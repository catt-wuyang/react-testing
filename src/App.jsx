import { useState } from "react";
import Toggle from "./toggle";

export default function App() {
  return (
    <div className="App">
      <Toggle onChange={(isOpen) => console.log(isOpen)} />
    </div>
  );
}
