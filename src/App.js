import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import Exercise from "./components/Exercise";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Box>
        <div className="app">
          <Navbar />
          <Exercise />
        </div>
      </Box>
    </>
  );
};
export default App;
