import React, {useState }from "react";
import Box from "./Box"
import NewBoxForm from "./NewBoxForm";

const BoxList = () => {
    const [boxes, setBoxes] = useState([]); 
    const addBox = boxObj => {
        setBoxes(boxes => [...boxes, boxObj])
    }
    const removeBox = (id) =>{
        setBoxes(boxes.filter(box => box.id !==id));
    }

    return (
        <div>
            <h3>Box List</h3>
            <NewBoxForm addBox ={addBox} />
            <div>
                {boxes.map(box => <Box key = {box.id} id ={box.id} bgcol={box.bgcol} width={box.width} height ={box.height} removeBox ={removeBox} />)}
            </div>
        </div>
    )
}

export default BoxList; 

