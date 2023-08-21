import React from "react";
import { Link } from "react-router-dom";

function NavBar(){
    return (
        <nav>
            <Link to="/soda">Soda</Link>
            <Link to="/chips">Chips</Link>
            <Link to="/sardines">Sardines</Link>
        </nav>
    )
}
export default NavBar; 