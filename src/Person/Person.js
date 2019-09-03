import React from 'react';



const person = (props) => {

    return(

      <div className="person1" key={props.key}>
        <h1 key={props.key} onClick={props.clicked}>Hi my name is {props.name}</h1>
      </div>  
     )
}

export default person;


 