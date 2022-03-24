import React from "react";
import TodoX from "./Todo";

const TodoListX = (props) =>{


    return (

        <ul>
        {props.todos.map((item,index)=>(

            
            <TodoX task={item.task}
            id={item.id}
             key={item.id} 
             completed={item.completed}
             removeTodo={props.removeTodo}
             toggleTodo={props.toggleTodo}
             editTodo={props.editTodo}
             ></TodoX>
            // <li>{item.task}</li>

        ))}
            </ul>
      )


}


export default TodoListX;