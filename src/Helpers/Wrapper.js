import React from "react";


const Wrapper = (props)=> {
    return (
        <div className={`box  ${props.className}`}>
          {props.children}
        </div>

    ) 
    
}


export default Wrapper;