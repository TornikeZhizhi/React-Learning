import React from 'react';

const userinput = (props) => {


    return (
      
        <div className="userInput">

            <input id="myname" type="text" onChange={props.change} value={props.defaultfValue} />  
        </div>
    
        
        )
}


export default userinput