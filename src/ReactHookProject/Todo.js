import React from "react";
import ToggleHook from "../AddRecources/hooks/toggleHook";
import EditForm from "./EditForm";


const TodoX = (props)=>{

const [isEditing,toggle] = ToggleHook(false)

return (
    <React.Fragment>


        {isEditing ? <EditForm id={props.id} editTodo={props.editTodo} initValue={props.task} toggleEditForm={toggle}></EditForm>:
        <>
        <input type="checkbox" checked={props.completed} onClick={()=>props.toggleTodo(props.id)} />
        <li style={{textDecoration:props.completed ? "line-through":"none"}}
         key={props.id}>{props.task}
         <span onClick={()=>toggle()} > edit</span>

         <span onClick={()=> props.removeTodo(props.id)}>   delete</span>
         </li>
         </>
         }

    </React.Fragment>
)
}


export default TodoX;
