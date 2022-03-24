import React, { useState  } from "react"; 
import TodoFormX from "./TodoFormX";
import TodoListX from "./TodoListX";
import uuid from 'react-uuid';


const HookMain = () =>{

    const initialTodos = [

        {id:1,task:"clean fish", completed:false},
        {id:2,task:"wash car", completed:true},
        {id:3,task:"grow", completed:true},
         
    ]

    const [todos,setTodos] = useState(initialTodos);

    const addTodo = newTodoText =>{
        setTodos([...todos,{id:uuid(),task:newTodoText, completed:false}])
    }

    const removeTodo = (todoId)=>{
        const updateTodos = todos.filter((todo)=>{
            return todo.id != todoId
        })
        setTodos(updateTodos)
    }

    const toggleTodo = todoId=>{
        const updateTodos = todos.map(todo=>{
            if (todo.id === todoId) {
              return  {...todo,completed:!todo.completed}
            }else {
                return  todo
            }
        })

        setTodos(updateTodos)
    }


    const editTodo =(todoId, newTask)=>{
        console.log(todoId,newTask)
        const updateTodos = todos.map(todo=>{
            return todo.id === todoId ? {...todo,task:newTask} : todo
        })

        setTodos(updateTodos)

    }


    return (

        <React.Fragment>
            <TodoFormX addTodo={addTodo}></TodoFormX>
            <TodoListX todos={todos} removeTodo={removeTodo} 
            toggleTodo={toggleTodo}
            editTodo={editTodo}
            ></TodoListX>
        </React.Fragment>
    )

}


export default HookMain;


