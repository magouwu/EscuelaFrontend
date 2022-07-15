import "./App.css";
import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import ErrorPage from "./ErrorPage";
import Portal from "./Portal";
import Context from "./Context/UserContext";
import useResources from "./hooks/useResources";
//Express js
//Nodejs
//
import { UserContextProvider } from "./Context/UserContext";



function App() {  
const {getResources, user} = useResources()

  return (
    <div className="App">
      <UserContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<ErrorPage />} />
            <Route path={"/:username"} element={<Portal />} component={user}/>
          </Routes>
        </Router>
      </UserContextProvider>
    </div>
  );
}

export default App;
