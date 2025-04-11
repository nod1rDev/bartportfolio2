// import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
// import Home from "./components/Home";
import NotFound from "./components/NotFound";
import "./index.css";
// import About from "./components/About";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> */}
        <Route path="*" element={<NotFound />} />

     
      </Routes>
    </Router>
  );
}

export default App;
