import React from 'react';



const header = (props) =>{


 
    return(
      <div className="header">

      
    <ul className="header">
        {props.navigation.map( (element,index) =>{
          return   <li key={index}><a className="navlists" href={element.url} >{element.page}</a></li>
        })}

     </ul>
     </div>
      
            
    )

}


export default header;