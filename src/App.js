import React, {Component} from 'react';
import './App.css';
import './Component/Person.css';
import Persona from './Component/Person.js';
import Header from './Component/Header.js';
import Blocks from './Component/Blocks.js'




class App extends Component {

  state = {
    persons: [

      {name:"toka", age:"22"},
      {name:"toka2", age:"23"},
      {name:"toka2", age:"21"}

    ],

    showPersons:true,

  };

  

  clickFunction = () =>{
    this.setState({
      showPersons: !this.state.showPersons
    })

  }

  deletePesonsHandler = (personIndex) => {

    const testnamesArray = this.state.persons;
    testnamesArray.splice(personIndex,1)
    this.setState({persons:testnamesArray})

  }

  render(){

    let persons = null;
    if (this.state.showPersons === true){
      persons = (
         <div>
           {this.state.persons.map((person,index) =>{
          
            return( 
              <div>
                <Persona key={index} clicked={()=> this.deletePesonsHandler(index)} name={person.name}/>
              </div>
            ) 
            })}
          </div> 
         
      )
    }


  

    return (
      <div className="App">

          <Header></Header>
          <Blocks></Blocks>
          <button onClick={this.clickFunction}>Clear </button>
          {persons}

      </div>
    );
  }
  
}

export default App;
