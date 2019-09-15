import React from 'react';

const valid = (props) => {


    let validationMessage = "Text Too Short";
    if (props.inputlength > 5){
        validationMessage = "text to long"
    }


    return(

      <div className="validation">
        <h1>Your text is {props.inputlength} and it is {validationMessage}</h1>
      </div>  
     )
}

export default valid;