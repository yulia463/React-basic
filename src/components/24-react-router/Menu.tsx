import React from "react";
import {NavLink} from "react-router-dom";
export const Menu=()=>{
    return(
        <nav>
            <NavLink to={"/"} end>Home </NavLink>
            <NavLink to={"/contacts"}>Contacts </NavLink>
            <NavLink to={"/about"}>About</NavLink>
            <NavLink to={"/draznilki"}>Draznilki</NavLink>
        </nav>
    )
}