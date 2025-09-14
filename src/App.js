import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Myportfolio/Component/Home";

function App() {
    return (
    
      <>
    <BrowserRouter>
  
      <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Contact" element={<Contact/>} />
      <Route path="/AboutUs" element = {<AboutUs />} /> */}
      </Routes>
    </BrowserRouter>
    </>
   

  );
}

export default App;
