import React from 'react';



const person = (props) => {

    return(

      <div>
     <h1>I am {props.name} {Math.floor(Math.random() * 100)} years old</h1>
        <p>{props.children}</p>
      </div>  
     )
}

export default person;