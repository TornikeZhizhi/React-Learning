import React, {useState} from "react";


const UserInputHook = () =>{

const [input, setInput] = useState("");
    const setInputHandler = (event) => {
      setInput(event.target.value)
    }
    const setInputClear = ()=>{
        setInput("")
    }

    return [input, setInputHandler,setInputClear]

}

export default UserInputHook;