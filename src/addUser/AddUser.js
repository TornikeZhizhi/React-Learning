import React,{useState} from "react";



const AddUser = (props)=>{

    const [nameChange, setNameChange] = useState("");
    const [ageChange, setAgeChange] = useState("");


    const nameChangeHandler = (event)=>{
        setNameChange(event.target.value);
    }

    const ageChangeHandler = (event)=>{
        setAgeChange(event.target.value);
    } 


    const submitHandler = (e)=>{
        e.preventDefault()
        // console.log(nameChange, ageChange)
        
        props.onAddUser(nameChange,ageChange)
        setNameChange("")
        setAgeChange("")
    }

    return (
        <>
        <form onSubmit={submitHandler}>
            <label>name</label>
            <input onChange={nameChangeHandler} value={nameChange} type="text"/>
            <br/>
            
            <label>age</label>
            <input onChange={ageChangeHandler} value={ageChange} type="number"/>

            <button type="submit">add User</button>
        </form>
        </>
       
    )

}


export default AddUser;