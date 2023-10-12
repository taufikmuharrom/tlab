import { useState } from "react";
import "./App.css";
import Nabvar from "./components/navbar";
import Hero from "./components/hero";
import Body from "./components/body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nabvar />
      <Hero />
      <Body />
    </>
  );
}

export default App;
