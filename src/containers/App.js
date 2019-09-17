import React, {Component} from 'react';
import './App.css';
import '../Component/Person.css';
import Persona from '../Component/Person.js';
import Header from '../Component/Header.js';
import Blocks from '../Component/Blocks.js';
import Valida from '../Validation/Validation.js';
import Char from '../Validation/Char.js';




class App extends Component {

  state = {

    navigation:[

      {url:"www.google.com",page:"home"},
      {url:"www.fb.com",page:"about"},
      {url:"www.instagram.com",page:"gallery"},
      {url:"www.go.com",page:"contact"},
      {url:"www.foer.com",page:"video"},
      {url:"www.google2.com",page:"book"}
    ],

    userinput:"",

    persons: [

      {name:"toka", age:"22"},
      {name:"toka2", age:"23"},
      {name:"toka2", age:"21"}

    ],
    blockHandler:true,
    showPersons:true

  };

  

  deletePesonsHandler = (personIndex) => {
    console.log(personIndex)
    const testnamesArray = this.state.persons;
    testnamesArray.splice(personIndex,1)
    this.setState({persons:testnamesArray})

  }


  blockclickFunction = () => {

    this.setState({
      blockHandler: !this.state.blockHandler
    })
  }
  

  inputHandeler = (event) => {

    this.setState(
      {userinput:event.target.value}
    )
  }

  deletechar = (charindex) => {

    const text = this.state.userinput.split("");
    text.splice(charindex,1)
    const updated = text.join("")
    this.setState({userinput:updated})
  }

  render(){

    var classname = ["chart","green","brown"].join(" ")

      const charList = this.state.userinput.split("").map((ch,index) => {

        return (
          <Char classes={classname} charakter={ch} key={index} clicked={()=> this.deletechar(index)}></Char>
        )
      })
  

    let persons = null;
    if (this.state.showPersons === true){
      persons = (
         <div>
           {this.state.persons.map((person,index) =>{
            
            return(   
              <div key={index}>
                <Persona clicked={()=> this.deletePesonsHandler(index)} name={person.name}/>
              </div>
            ) 
            })}
          </div> 
         
      )
    }


    let block = null;

    if(this.state.blockHandler === true){
      block = ( 
          <Blocks></Blocks>
        )
    }



  

    return (
      <div className="App">
          
          <Header navigation={this.state.navigation}></Header>
          <button onClick={this.blockclickFunction}>Block Toggle Button </button>
          {block}
          {persons}

          <input type="text" value={this.state.userinput} 
          onChange={this.inputHandeler}></input>
          <p>{this.state.userinput}</p>
          <Valida inputlength={this.state.userinput.length}></Valida>
          {charList}
      </div>
    );
  }
  
}

export default App;
