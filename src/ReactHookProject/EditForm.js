import React from "react";

import UserInputHook from "../AddRecources/hooks/userInputHook";

const EditForm = (props) =>{

const [value,handleChange,reset] = UserInputHook(props.initValue)
    console.log(props.initValue, "dssa")
    return (

        <form onSubmit={(e)=>{
            e.preventDefault();
            props.editTodo(props.id,value);
            props.toggleEditForm()
        }}>
            <span>{value}</span>
    <input value={value} onChange={handleChange} type="text" />
    </form>
        )

}

export default EditForm;