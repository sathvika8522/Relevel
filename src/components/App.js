import React from "react";
import '../styles/app.css';
import { Navbar } from "./Navbar";
import { Routing } from "./Routing"

const App=()=> {
  return (
    <>
      <Navbar />
      <Routing />
    </>
  );
}

export default App;