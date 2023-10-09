import React, { useState } from "react";
import Search from "./Search";
// import './Navbar.css'
import burger from '../images/burger.jpg'
import logo from '../images/logo.jpg'

import { Link } from "react-router-dom";
function Navbarh(props) {

    const[search,setsearch]=useState("");

    return (
        <div>
            <nav className="header navbar navbar-expand-lg border-b border-b-grey shadow-md h-[80px]">
                <div className="container-fluid">
                    <div className="logo">
                        <img className="navimg" src={logo} height="100px" width="200px" alt="" />
                        <ul className="navbar-nav ">
                            {/* <li>
                                <a className="nav-link ">
                                    <b className="text-[black]">ANY RECIPE</b>
                                </a>
                            </li> */}
                        </ul>
                    </div>

                    <div className="child1 flex flex-wrap gap-2" id="navbarNav">
                        <div className="flex gap-3 ">
                            <input className="border-0 w-[300px] bg-[whitesmoke] rounded-lg py-2 text-black pl-[20px]" type="text" placeholder="Search for a recipe" onChange={(e)=>setsearch(e.target.value)}></input>
                           <Link to="/Search" className="no-underline text-black"> <p className="cursor-pointer pt-[8px]" onClick={()=>props.getcontentfromnavbar(search)}>Search</p></Link>
                        </div>
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <Link to="/LandingPage" className="nav-link text-[white]">
                                    <div className="text-black">Home</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/recipies" className="nav-link text-[white]">
                                    <div className="text-black">Recipies</div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Register" className="nav-link text-[white]">
                                    <div className="text-black">LogIn</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
}

export default Navbarh;