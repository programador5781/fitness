import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
// import Landing from "./views/Landing/Landing";
import { Landing, Home } from "./views";
import NavBar from "./components/NavBar/NavBar";



function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" element={<Landing />}/>
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
