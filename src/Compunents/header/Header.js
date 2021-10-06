import React, { useContext } from 'react';
import "./Header.css"
import logo from "../travel-guru-master/Logo.png"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Container } from 'react-bootstrap';
import { UserId } from '../../App';
const Header = () => {
    const [userInfo, setUserInfo]=useContext(UserId)

    return (
        <div className="headerDisplay d-flex justify-content-around"> 
        <div>
         <Link to="/Home">
        <img className="logo margin" src={logo} alt="" />
        </Link>
        </div>

        <div className="searchInput margin">
        <input type="search" name="" id="" placeholder="Search your Destination..."/>
        <button type="submit">Search</button>
        </div>
         
        <nav className=" margin">
            <Link className="Links" to="/News">News</Link>
            <Link className="Links" to="/Destination">Destination</Link>
            <Link className="Links" to="/Blog">Blog</Link>
            <Link className="Links" to="/Contact">Contact</Link>
        </nav>
        {
            userInfo.email?<button onClick={()=>setUserInfo("")} className="loginButton margin">Log Out</button>:
             <Link to="/LogIn">
            <button className="loginButton margin">Log In</button>
            </Link>
        }
        
        </div>
    );
};

export default Header;