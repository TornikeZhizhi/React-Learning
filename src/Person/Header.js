import React from 'react';


const header = (props) =>{
 
    return(

     <li><a className="navlists" onMouseEnter={props.hover} href={props.link}>{props.name}</a></li>
      
            
    )

}


export default header;