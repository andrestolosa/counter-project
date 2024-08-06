import React from "react";
import logo from './img2/gameCounter_png3.png';
import './Header.css'

function Header()
{
    return(
        <div className="header">
            <img className="logo" src={logo} alt="gameCounter">
            </img>
        </div>
    );
}

export default Header;