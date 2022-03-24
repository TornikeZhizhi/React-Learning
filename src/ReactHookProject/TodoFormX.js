import React from "react";
import UserInputHook from "../AddRecources/hooks/userInputHook";

const TodoFormX = (props) =>{
    const [value,handleChange,reset] = UserInputHook("")


    return (
        <React.Fragment>

            <form onSubmit={event=>{
                event.preventDefault();
                props.addTodo(value);
                reset()
            }}>
            <h1>{value}</h1>
            <input onChange={handleChange}  value={value}type="text" />
            </form>
        </React.Fragment>
    )

}


export default TodoFormX;