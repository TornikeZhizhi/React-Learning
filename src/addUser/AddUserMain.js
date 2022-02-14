import React, {useState} from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";



const AddUserMain = ()=>{


    const [user, setUser] = useState([])


    const addUserHandler = (name, age) => {
        console.log(name,age)
        setUser( (prevState) =>{
            return [...prevState, {name:name, age:age}]
        })
    }


    const delUser = (delIndex)=>{
        setUser((previusState)=>{
            return previusState.filter((index,el)=>{
             return el != delIndex
            })
        })
        
    }
    
    



    return (
        <>
        <AddUser  onAddUser={addUserHandler}></AddUser>
        <UserList userList={user} delUserIndex={delUser}></UserList>
        </>
    )

}


export default AddUserMain;