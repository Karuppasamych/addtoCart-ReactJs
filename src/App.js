import React, { useState, useReducer } from "react";
import './App.css';
import Navbar from './buckets/Navbar';
import Footer from './buckets/Footer';
// import Products from "./buckets/Products";

import { BrowserRouter as Router, Routes, Route ,Link, } from "react-router-dom";
// import Bodycontent from "./buckets/Bodyconten";
// import Createproduct from './buckets/Products';
// import Displaydata from "./buckets/displaydata";
// import CHome from './ClassComponent/home';
// import FHome from './FunctionComponent/home';
import Login from './RouterApp/login' 
import Home from "./RouterApp/Homepage";
import Cartpage from './RouterApp/Cartpage'
import Detailpage from "./RouterApp/detailpage";

import {Context} from './context/stateContext';
import { initialstate } from "./context/stateReducer";
import { stateReducer } from "./context/stateReducer";





const  App = () => {

  const [varstate, updatestate]= useReducer(stateReducer, initialstate);

  console.log(varstate,'VAR')

  return (
    <div className="App">
      {/* <FHome /> */}
        <Context.Provider value={{varstate, updatestate}}>
          <Router>
            <Navbar/>
            <Routes>
              
              <Route path='/' element={<Login />}/>
              <Route path='home' element={<Home />}/>
              <Route path='cartdetails' element={<Cartpage />}/>
              <Route path='cartdetailspage/:id' element={<Detailpage />}/>

              
            </Routes>
            <Footer/>
          </Router>
        </Context.Provider>
    </div>
  );
}

export default App;

     