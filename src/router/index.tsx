import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro";
import Signup from "../pages/Signup";

export default function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Intro />} />
        <Route path='signup' element={<Signup />} />
      </Routes>
    </HashRouter>
  );
}
