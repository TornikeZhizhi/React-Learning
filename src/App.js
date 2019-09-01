import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Userinputi from './userInput/userInput.js';
import UserOutpoot from './userOutpoot/userOutpoot.js';
import Persona from './Person/Person.js';




class App extends Component {

  state = {
    persons: [

      {name:"toka", age:"22"},
      {name:"toka2", age:"23"},
      {name:"toka2", age:"21"}

    ],


    showPersons:true,

    testNames : [

        {name:"toka"},
        {name:"nika"},
        {name:"chika"}
    ],

  };

  

  clickFunction = () =>{
    this.setState({
      showPersons: !this.state.showPersons
    })

  }


  render(){

    let persons = null;

    if (this.state.showPersons === true){
      persons = (
         <div>
           {this.state.testNames.map((person,key) =>{
            return( 
              <div>
                <Persona name={person.name}/>
                <UserOutpoot name={this.state.testNames[key].name}></UserOutpoot>
              </div>
            ) 
            })}
          </div> 
         
      )
    }

    return (
      <div className="App">
        <button onClick={this.clickFunction}>Clear </button>
        {this.state.showPersons === false ? <div>blablb</div>: null}
        {persons}
      </div>
    );
  }
  
}

export default App;
