import React from "react";
import Login from "./pages/Login";
import Generate from "./pages/Generate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Generate />} />
      </Routes>
    </Router>
  );
}
export default App;
