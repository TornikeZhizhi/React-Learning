import React, {useState} from "react";


const UserInputHook = (initvalue) =>{

const [input, setInput] = useState(initvalue);
    const setInputHandler = (event) => {
      // event.preventDefault()
      setInput(event.target.value)
    }
    const setInputClear = ()=>{
        setInput("")
    }

    return [input, setInputHandler,setInputClear]

}

export default UserInputHook;