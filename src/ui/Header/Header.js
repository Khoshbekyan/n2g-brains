import React from "react";
import {  Link } from "react-router-dom";
// import Login from "../Login/Login.js";
// import Register from "../Register/Register.js";
import "./Header.css";

const Header = () => {
    return (
        <section>
            <header>
                <a href="/"><img
                    className="logoN2g"
                    src="https://i.ibb.co/WBw3wp4/image.png"
                    alt="Logo"
                /></a>
                <ul>
                    <li><Link to="/">COURSES</Link></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
                <div className="logRegDiv">
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </div>
            </header>

        </section>
    );
};

export default Header;
