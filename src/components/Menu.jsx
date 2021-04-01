import React from "react";
import {NavLink} from "react-router-dom";

export function Menu() {
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">ГЛАВНАЯ</NavLink>
            <NavLink className="nav-link" to="/about">О НАС</NavLink>
            <NavLink className="nav-link" to="/contact-us">КОНТАКТЫ</NavLink>
        </nav>
    );
}
