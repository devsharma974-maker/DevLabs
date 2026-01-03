import React from "react";
import { HashRouter , Route, Routes } from "react-router-dom";
import Home from "./Myportfolio/Component/Home.js";

function App() {
    return (
    
      <>
    <HashRouter >
  
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Contact" element={<Contact/>} />
      <Route path="/AboutUs" element = {<AboutUs />} /> */}
      </Routes>
    </HashRouter>
    </>
   

  );
}

export default App;
