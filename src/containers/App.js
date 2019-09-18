import React, {Component} from 'react';
import './App.css';
import '../Component/Person.css';
import Persona from '../Component/Person.js';
import Blocks from '../Component/Blocks.js';







class App extends Component {

  state = {

    persons: [],

    userInput:"",
 

  };



  
  inputHandeler = (event) => {

    console.log(this.state.userInput)
    this.setState({

      userInput:event.target.value
    })
  }

  addblockFunction = () => {
    var x = this.state.persons.push({name:this.state.userInput,age:this.state.persons.length+1});
    this.setState({person:x})
  }


  deletediv =(clickIndex) =>{
    const y =  this.state.persons
    y.splice(clickIndex,1)
    this.setState({persons:y})
  }






  render(){
 
  
      let divs = (

        <div>
            {this.state.persons.map((person, index) => {
                return (
                <div key={index} >My name is {person.name} and i am {person.age}<span onClick={() => this.deletediv(index)} className="close">X</span> </div>
                  )
              
            })}
        </div>


      )
        

    return (
      <div className="App">
          <input type="text" onChange={this.inputHandeler}></input>
        {divs}
          <button onClick={this.addblockFunction}>ADD</button>
          {/* <Blocks></Blocks> */}
       
        
      </div>
    );
  }
  
}

export default App;
