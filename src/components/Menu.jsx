import React from "react";
import {NavLink} from "react-router-dom";

export function Menu() {
    return(
        <nav className="nav">
            <NavLink className="nav-link active" aria-current="page" to="/">ГЛАВНАЯ</NavLink>
            <NavLink className="nav-link" to="/addArticle">ДОБАВИТЬ СТАТЬЮ</NavLink>
            <NavLink className="nav-link" to="/reg">РЕГИСТРАЦИЯ</NavLink>
        </nav>
    );
}
