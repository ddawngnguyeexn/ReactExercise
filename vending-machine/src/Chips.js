import React from "react";
import { Link } from "react-router-dom";
function Chips() {
    return (
        <div> 
            <h1> VERY CRUNCHY </h1>
            <img
                src="https://media2.giphy.com/media/l0G17vt3egB6B4mZO/giphy.gif?cid=ecf05e47ie8a8pbkquskas4f0kv91adibjwrm4t3r2wgql9e&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="A bag of chip"
            />
            <p><Link to="/">GO BACK</Link></p>
        </div>

    );
}
export default Chips; 