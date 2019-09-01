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



    myname: [{firstname:'nikala'}]

  };

  

  mynameinput = (event) => {

    this.setState({

      myname:[{

        firstname:event.target.value

      }]
    })

  }

  testNameChangeEvent = (event) => {
    
    this.setState({

      testNames : [

        {name:event.target.value},
        {name:event.target.value},
        {name:event.target.value}
      
    ]
    })

  }
  

  clickFunction = () =>{

    if(this.state.showPersons === true){
      
      document.getElementById('myname').value = "";

    }

    this.setState({
      // myname:[{
      //   firstname:''
      // }],
      showPersons: !this.state.showPersons
    })

  }




 

  render(){


    let persons = null;

    if (this.state.showPersons === true){
      persons = (

         <div>
            <Persona name={this.state.myname[0].firstname}/>
            <Userinputi  change={this.mynameinput} />
            <UserOutpoot name={this.state.testNames[0].name}></UserOutpoot>
            <UserOutpoot name={this.state.testNames[1].name}></UserOutpoot>
            <UserOutpoot name={this.state.testNames[2].name}></UserOutpoot>
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
