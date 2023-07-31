import React, {useState }from "react";
import {v4 as uuid} from "uuid"; 

const NewBoxForm = ({addBox}) => {
    const ININTIAL_STATE = {
        bgcol:'',
        width:'',
        height:''
    }
    const [formData, setFormData] = useState(ININTIAL_STATE); 
    const handleChange = (e) => {
        const {name, value} = e.target; 
        setFormData(formData => ({
            ...formData, [name]:value
        }))
    }
    const handleSubmit =(e) =>{
        e.preventDefault(); 
        addBox({...formData, id:uuid()}); 
        setFormData(ININTIAL_STATE);

    }
    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="bgcol">Background Color</label>
            <input
                id ="bgcol"
                type="text"
                name = "bgcol"
                placeholder = "Background Color"
                value ={formData.bgcol}
                onChange = {handleChange}
            />
            <label htmlFor="width">Width</label>
            <input
                id="width"
                type="text"
                name = "width"
                placeholder = "Width"
                value ={formData.width}
                onChange = {handleChange}
            />
            <label htmlFor="height">Height</label>
            <input
                id="height"
                type="text"
                name = "height"
                placeholder = "Height"
                value ={formData.height}
                onChange = {handleChange}
            />
            <button>Add Box</button>
        </form>
    )
}

export default NewBoxForm; 