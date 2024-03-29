import React from "react";
import classes from "../Rec.module.css"

const Wrapper = (props)=> {
    
    return(
       <div className={`${classes.wrapper} ${props.className}`}>{props.children }</div>
    )

}


export default Wrapper;