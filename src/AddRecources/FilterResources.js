import React from "react";

import classes from "./Rec.module.css"



const FilterResources = (props) => {


    const inputHandler = (event) =>{
        // console.log(event.target.value)
        props.filterWord(event.target.value)

    }

    return (
        <React.Fragment>

         <label className={classes.filter_label}>Filter Resources</label>
         <input onChange={inputHandler} className={classes.filter_input} type="text" />
        </React.Fragment>
        )

}


export default FilterResources;