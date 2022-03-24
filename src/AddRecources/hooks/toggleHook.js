import React, {useState} from "react";

const ToggleHook = (initialValue = false) =>{

const [input, setInput] = useState(initialValue);
    // alert("s")
    const setInputHandler = (event) => {
      setInput(!input);
      console.log(input)
    }
    
    return [input, setInputHandler]
}

export default ToggleHook;