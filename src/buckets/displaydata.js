import React from 'react';
import Navbar from '../buckets/Navbar';
import Footer from '../buckets/Footer';
import Products from "../buckets/Products";
import { BrowserRouter as Router, Routes, Route ,Link, } from "react-router-dom";
import Bodycontent from "../buckets/Bodyconten";
import Propsfunc1 from './propsfunc';


const Displaydata = () =>{
    const arr = ['Split AC', '2 Ton AC', '3 Ton AC', 'Fridge', 'Washing Machine', 'Micro Oven', '3 Star AC', '5 Star AC', '5 Star AC', '5 St', '3 Ton AC', 'Fridge', '3 Ton AC']

    return(
        <div><Navbar/>
            <div className="container-fluid">
                <Bodycontent />
                <Propsfunc1 data={arr}/>
                <Footer />
            </div>
            
        </div>

    )
}

export default Displaydata;