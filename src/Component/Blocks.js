import React from 'react';


//Image import
function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }
const images = importAll(require.context('./img', false, /\.(png|jpe?g|svg)$/));
 //Image import


 const imagesArray = [
    { id: 1, src: 'art.jpg', title: 'Art', description: 'bar' },
    { id: 2, src: 'about-artist.png', title: 'Main Art', description: 'bar' },
    { id: 3, src: 'art.jpg', title: 'Grand', description: 'bar' },
    { id: 4, src: 'child.png', title: 'Foo', description: 'bar' },
    { id: 5, src: 'art.jpg', title: 'None', description: 'bar' }
  ];

const block = (props) => {
    return(
      <div className="block_container">
         {
           imagesArray.map( (element,inedx)=> {
            return (
                <div className="block_wrapper">
                    <div className="img_box">
                        <img key={element.id} src={images[element.src]} alt={element.title}/>
                    </div>
                    <div className="block_text">
                        <h2>{element.title}</h2>
                        <p>{element.description}</p>
                    </div>
                </div>
            )
           }) 
        } 
      </div>  
      
     )
}

export default block;;
