import React from 'react';

const char = (props) => {


    return(

      <div className={props.classes} onClick={props.clicked}>
        <h1>{props.charakter}</h1>
      </div>  
     )
}

export default char;