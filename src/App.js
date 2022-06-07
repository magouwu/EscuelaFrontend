import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Projects from "./Projects";
import Navbar from "./components/Navbar";
import ErrorPage from "./ErrorPage";
import Portal from "./Portal";

//Express js
//Nodejs
//
import { UserContextProvider } from "./Context/UserContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path="/portal" element={<Portal />} />
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
