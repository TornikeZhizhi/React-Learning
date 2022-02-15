import React, {useState} from "react";
import Wrapper from "../Helpers/Wrapper";
const UserList = (props) => {


    
const [ editName, setEditName] = useState("")
const [ editAge, setEditAge] = useState("")

   const userDelHandler = (index)=> {
    props.delUserIndex(index)
    
   }

   const editHandler = (index)=> {
       props.editUserIndex(index)
   }


   const onEditHandler = (index)=> {
         props.onEditUserHandler(editName,editAge,index)
    }


  const nameChangeHandler = (event)=> {
      setEditName(event.target.value)
  } 
  
  const ageChangeHandler = (event)=> {
    setEditAge(event.target.value)
}  


   let userList;
   if(props.userList.length < 1){
    return <h2>List Not Found</h2>
   }else {
     userList = props.userList.map( (data,index)=>{
        if (data.editToggle == true) {
            return (
                <h2 key={data.id}>{data.name} - {data.age}<span onClick={()=>userDelHandler(index)}>Delete User</span>
                <span onClick={()=>editHandler(index)}> ---Edit</span>
                </h2>
            )
        }else {
            return (
                <div>
                    <input type="text" onChange={nameChangeHandler} />
                    <input type="number" onChange={ageChangeHandler} />
                    <span onClick={()=>onEditHandler(index)}>Edit User</span>
                </div>
            )
        }
     })
   }

   

   

   return (
        <Wrapper className="box2">
            {userList}
        </Wrapper>
   ) 

}

export default UserList;