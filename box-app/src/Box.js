import React, {useState }from "react";


const Box = ({id, bgcol="blue", width=5, height=5, removeBox}) => {
    const remove = () => removeBox(id);
    return (
        <div>
            <div style ={{
            height: `${height}em`,
            width:  `${width}em`,
            backgroundColor: `${bgcol}`
        }}/>
            
            <button onClick={remove}>X</button>

        </div>
    )
}

export default Box; 
