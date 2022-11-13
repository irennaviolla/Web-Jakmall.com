import Home from "../src/pages/Home"


import React from "react"
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
import Payment from "./pages/Payment";
import Finish from "./pages/Finish";

const App = () => {
  return (
    
    <Routes>
      <Route exact path="/" element={<Home/>}/>  
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/finish" element={<Finish/>}/>
    </Routes>

  )
  
}

export default App;
