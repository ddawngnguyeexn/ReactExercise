import React from "react";
import { Link } from "react-router-dom";
function Sardines() {
    return (
        <div> 
            <h1> Fresh Fish </h1>
            <img
                src="https://media1.giphy.com/media/gihtXHs2hwlAz6ykaV/giphy.gif?cid=ecf05e47gxkssc2397exgm36xgbaeuoezudlenyg3ntitsh5&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="Fish in the box"
            />
            <p><Link to="/">GO BACK</Link></p>
        </div>

    );
}
export default Sardines; 