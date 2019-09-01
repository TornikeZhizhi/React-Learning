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

  deletePesonsHandler = (personIndex) => {

  const persons = this.state.testNames;
  
    persons.splice(personIndex,1)
    this.setState({testNames:persons})

  }



  deleteOutpootHandeler = (outIndex) => {
    
   
    this.state.persons.splice(outIndex,1)
    this.setState({person:this.state.persons})
  }

  render(){

    let persons = null;

    if (this.state.showPersons === true){
      persons = (
         <div>
           {this.state.testNames.map((person,index) =>{
            return( 
              <div>
                <Persona clicked={()=> this.deletePesonsHandler(index)} name={person.name}/>
              </div>
            ) 
            })}
          </div> 
         
      )
    }

   let outPoot = (

      <div>
        {
          this.state.persons.map((value,index)=> {

            return(

             <div>
               <UserOutpoot clicked={this.deleteOutpootHandeler.bind(this,index)} name={value.name} age={index}></UserOutpoot>
            </div>
            
            )
          })
 


        }
      
      </div>
        
    )

    return (
      <div className="App">
        <button onClick={this.clickFunction}>Clear </button>
        {this.state.showPersons === false ? <div>blablb</div>: null}
        {persons}
        {outPoot}


        


      </div>
    );
  }
  
}

export default App;
