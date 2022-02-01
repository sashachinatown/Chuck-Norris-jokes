import React from "react";
import './app-header.css';
import logo from './logo.png';

const AppHeader = () => {
    return (
        <div className="app-header d-flex">
            <img src={logo} className="logo" alt="logo"></img>
            <span className="app-header-text">Chuck Norris</span>
        </div>
    )
}

export default AppHeader;