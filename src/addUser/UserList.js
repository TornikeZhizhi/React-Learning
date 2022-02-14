import React from "react";
import Wrapper from "../Helpers/Wrapper";
const UserList = (props) => {



   const userDelHandler = (index)=> {
    // console.log(index)

    props.delUserIndex(index)
   }


   if(props.userList.length < 1){

    return <h2>List Not Found</h2>
   } 

   return (
        <Wrapper className="box2">
            { props.userList.map( (data,index)=>(
                <h2>{data.name} - {data.age} <span onClick={()=>userDelHandler(index)}>Delete User</span></h2> 
            ))}
        </Wrapper>
   ) 

}

export default UserList;