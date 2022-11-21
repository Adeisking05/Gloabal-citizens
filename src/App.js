import React from "react";

import Login from "./Components/Login";
import SIgnUp from "./Components/SIgnUp";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SIgnUp />
      <Login />
      <Home />
    </div>
  );
}

export default App;
