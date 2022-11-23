import React from "react";

import Login from "./Components/Login";
import SIgnUp from "./Components/SIgnUp";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import BrowseUsers from "./Components/BrowseUsers";

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SIgnUp />
      <Login />
      <Home />
      <BrowseUsers />
    </div>
  );
}

export default App;
