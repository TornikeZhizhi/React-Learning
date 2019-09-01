import React from 'react';



const person = (props) => {

    return(

      <div className="person1">
        <h1 onClick={props.clicked}>Hi my name is {props.name}</h1>
      </div>  
     )
}

export default person;


 