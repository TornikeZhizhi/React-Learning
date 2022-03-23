import React, {useState} from "react";
import AddUser from "./AddUser";
import UserList from "./UserList";



const AddUserMain = ()=>{


    const [user, setUser] = useState([])


    const addUserHandler = (name, age) => {
        console.log(name,age)
        setUser( (prevState) =>{
            return [...prevState, {name:name, age:age,editToggle:true,id:Math.random().toString()}]
        })
    }


    const delUser = (delIndex)=>{
        // setUser((previusState)=>{
        //     return previusState.filter((index,el)=>{
        //      return el != delIndex
        //     })
        // })

        const data = user.filter((index,el)=>{
            return el != delIndex
        })
        // console.log(data)
        setUser(data)
    
    }
    
    const editUser = (editIndex)=>{
        const editData = [];
            user.map((el,index)=>{
                if (index == editIndex) {
                     el.editToggle = false;
                }
                editData.push(el)
            })
        setUser(editData)

    }

    

    const EditUserHandler = (editName,editAge,editIndex) => {
        // console.log(editName,editAge,editIndex)
        const finalEditData = [];
        user.map((el,index)=>{
            if (index == editIndex) {
                 el.editToggle = true;
                 el.name = editName;
                 el.age = editAge;
            }
            finalEditData.push(el)
        })
    setUser(finalEditData)

    }
    



    return (
        <>
        <AddUser  onAddUser={addUserHandler}></AddUser>
        <UserList onEditUserHandler={EditUserHandler} userList={user} editUserIndex={editUser} delUserIndex={delUser}></UserList>
        </>
    )

}


export default AddUserMain;