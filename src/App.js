import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import ReduxProvider from "./redux/Provider";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import React, { Component } from "react";

function App() {
  return (
    <BrowserRouter>
      <ReduxProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </ReduxProvider>
    </BrowserRouter>
  );
}

export default App;
