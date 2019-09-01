import React from 'react';

const userOutpoot = (props) => {


    return (
      
        <div className="userInput">

            <p>i am paragraf</p>  
            <p onClick={props.clicked}>i am {props.name}</p>  
            
        </div>
    
        
        )
}


export default userOutpoot