import React,{useState} from "react";
import classes from "./Rec.module.css"


const AddRec = (props) =>{
    
    const [inputState, setInputState] = useState("");
    const [textAreaState, setTextAreaState] = useState("");

    const [inputVal, setInputVal] = useState(false);

    const [inputSpan,setInputSpan] = useState(false)
    const [textareaSpan,setTextareaSpan] = useState(false)

    const inputHandler = (event) =>{
        setInputState(event.target.value);
        

        if (event.target.value.length > 2) {
            setInputSpan(false)
        }

        if (event.target.value.length > 2 && textAreaState.length > 4) {
            setInputVal(true)
        }else {
            setInputVal(false)

        }
    }

    

    const textAreaHandler = (event) =>{
        setTextAreaState(event.target.value);

        if (event.target.value.length > 4) {
            setTextareaSpan(false)
        }


        if (event.target.value.length > 4 && inputState.length > 2) {
            setInputVal(true)
        }else {
            setInputVal(false)

        }
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const formData = {
            title:inputState,
            text:textAreaState,
            id:Math.random()
        }   

        if (inputVal) { 
            props.addRecData(formData);

            setInputState("");
            setTextAreaState("");

            setInputState(false)

        }else {
            setInputSpan(true);
            setTextareaSpan(true);
        }
    }


    return (

        <form className={classes.form} onSubmit={submitHandler}>
            <label>Title</label>
            <input onChange={inputHandler} value={inputState} type="text" />
            {inputSpan && <span className={classes.val_span}>Need 2 more letter</span>}
            <label>Description</label>

            <textarea onChange={textAreaHandler} value={textAreaState}></textarea>
            {textareaSpan && <span className={classes.val_span}>Please enter text, 5 letter or more</span>}
            <button className={!inputVal ? classes.disable :null} type="submit">Add Resource</button>
        </form>
    )

}


export default AddRec;