import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
// import {  Link } from "react-router-dom";



const Navbar = () =>{

    return(
        <div className="">
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" >A/C Services</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="mynavbar">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item" >
                        {/* <Link to ="/" className="nav-link">Products</Link> */}
                         <a href ="/" className="nav-link">Products</a>

                        </li>
                        <li className="nav-item" to="/home">
                        {/* <Link to ="/home" className="nav-link" >Categories</Link> */}
                        <a href ="/" className="nav-link">Categories</a>
                        </li>
                        <li className="nav-item">
                        {/* <Link to ="/accessories" className="nav-link">Accessories</Link> */}
                        <a href ="/" className="nav-link">Accessories</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="text" placeholder="Search" />
                        <button className="btn btn-primary" type="button">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


export default Navbar;