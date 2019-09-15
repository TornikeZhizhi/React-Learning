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
    { id: 1, src: 'art.jpg', title: 'Art', description: 'Painting Of Art' },
    { id: 2, src: 'about-artist.png', title: 'Main Art', description: 'Painting Of Art' },
    { id: 3, src: 'art.jpg', title: 'Grand', description: 'Painting Of Art' },
    { id: 4, src: 'child.png', title: 'Foo', description: 'Painting' },
    { id: 5, src: 'art.jpg', title: 'None', description: 'Painting Of Art' },
    { id: 6, src: 'art.jpg', title: 'None', description: 'Painting Of Art' },
    { id: 7, src: 'child.png', title: 'None', description: 'Painting Of Art' },
    { id: 8, src: 'art.jpg', title: 'None', description: 'Painting Of Art' }
  ];

const block = (props) => {
    return(
      <div className="block_container">
         {
           imagesArray.map( (element,inedx)=> {
            return (
                <div className="block_wrapper" key={element.id}>
                    <div className="img_box">
                        <img src={images[element.src]} alt={element.title}/>
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
