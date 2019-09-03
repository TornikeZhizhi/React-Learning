import React from 'react';



const header = (props) =>{

  let navigation = [

    {url:"www.google.com",page:"home"},
    {url:"www.fb.com",page:"about"},
    {url:"www.instagram.com",page:"gallery"},
    {url:"www.go.com",page:"contact"},
    {url:"www.foer.com",page:"video"},
    {url:"www.google2.com",page:"book"}
  ]
 
    return(
      <div className="header">

     
    <ul className="header">
        {navigation.map( (el,i) =>{
          return   <li key={i}><a className="navlists" href={el.url} >{el.page}</a></li>
        })}

     </ul>
     </div>
      
            
    )

}


export default header;