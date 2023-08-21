import React from "react";
import { Link } from "react-router-dom";
function Soda() {
    return (
        <div> 
            <h1> SO MUCH SUGAR </h1>
            <img
                src="https://media2.giphy.com/media/l4FGr3nzq5u0m02vm/giphy.gif?cid=ecf05e47s2ywc7jb763v54d4wnsyko33k48elyjsupebjplz&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                alt="A Coke"
            />
            <p><Link to="/">GO BACK</Link></p>
        </div>

    );
}
export default Soda; 

