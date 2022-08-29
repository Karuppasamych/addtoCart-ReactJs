import React, { useState } from "react";
import './App.css';
import Navbar from './buckets/Navbar';
import Footer from './buckets/Footer';
// import Products from "./buckets/Products";

import { BrowserRouter as Router, Routes, Route ,Link, } from "react-router-dom";
import Bodycontent from "./buckets/Bodyconten";
import Createproduct from './buckets/Products';
import Displaydata from "./buckets/displaydata";
import Home from './ClassComponent/home'; 




const  App = () => {

  return (
    <div className="App">
      <Home />
    {/* <Router>
      <Navbar/>
      <Routes>
        
        <Route path='/' element={<Createproduct/>}/>
        <Route path='/home' element={<Bodycontent/>}/>
        
      </Routes>
      <Footer/>
    </Router> */}
    </div>
  );
}

export default App;

     