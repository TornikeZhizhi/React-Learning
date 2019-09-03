import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Persona from './Person/Person.js';
import Header from './Person/Header.js';




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

  deletePesonsHandler = (personIndex) => {

  const testnamesArray = this.state.testNames;
  
  testnamesArray.splice(personIndex,1)
    this.setState({testNames:testnamesArray})

  }

  testfuncton =  (indexvalue) => {

    this.state.navigation.splice(indexvalue,1)
    this.setState({navigation:this.state.navigation})
    document.getElementsByClassName("navlists")[indexvalue].classList.add("active");
    console.log("I am " + indexvalue + " element")
    
  }


  render(){

    let persons = null;

    if (this.state.showPersons === true){
      persons = (
         <div>
           {this.state.testNames.map((person,index) =>{
          
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
    
        <button onClick={this.clickFunction}>Clear </button>
        {this.state.showPersons === true ? <div>blablb</div>: null}
        {persons}
      
        

        


      </div>
    );
  }
  
}

export default App;
