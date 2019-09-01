import React from 'react';

const userOutpoot = (props) => {


    return (
      
        <div className="userInput">

            
            <p onClick={props.clicked}>I am {props.name} and I am {props.age} Years old</p>  
            
        </div>
    
        
        )
}


export default userOutpoot