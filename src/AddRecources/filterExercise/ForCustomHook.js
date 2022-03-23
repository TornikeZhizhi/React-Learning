import React from "react";
import UserInputHook from "../hooks/userInputHook";


const ForCustomHook = () => {

    const [input, setInput, setInputClear] = UserInputHook()

    return (
    <React.Fragment>
        <span>{input}</span>
        <input onChange={setInput} value={input} type="text"   />
        <button onClick={setInputClear}>Clear</button>
    </React.Fragment>
    )

}


export default ForCustomHook;