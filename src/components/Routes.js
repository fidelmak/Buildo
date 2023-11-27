import DisplayAll from "../components/project/DisplayAll";
import Exercise from "../components/Exercise";

import React from "react";
import { Route, Routes } from "react-router-dom";

export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Exercise />} />
        <Route path="/display" element={<DisplayAll />} />
      </Routes>
    </div>
  );
}
