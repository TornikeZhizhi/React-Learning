import React from 'react';



const header = (props) =>{

 
    return(
    <ul className="header">
        {props.data.map( (el,i) =>{
          return   <li key={i}><a className="navlists" href={el.url} >{el.page}</a></li>
        })}

     </ul>
      
            
    )

}


export default header;