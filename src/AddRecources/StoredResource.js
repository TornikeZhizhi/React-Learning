import React from "react";
import classes from "./Rec.module.css"


const StoredRec = (props) =>{


    const deleteHandler =(index)=>{

        props.deleteIndex(index)
    }

    let content = <p>Resources Not Found...</p>

    if (props.data.length > 0) {
        content = props.data.map((item,index)=>(

            <div className={classes.storedList} key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
                <span onClick={deleteHandler.bind(this,item.id)}  className={classes.delete}>
                    Delete 
                </span>
            </div>
            
        ))
    }
 
    return (
            <React.Fragment>
                 {content}
            </React.Fragment>    
    ) 
}


export default StoredRec;