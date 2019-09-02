import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
import Userinputi from './userInput/userInput.js';
import UserOutpoot from './userOutpoot/userOutpoot.js';
import Persona from './Person/Person.js';
import Header from './Person/Header.js';




class App extends Component {

  state = {
    persons: [

      {name:"toka", age:"22"},
      {name:"toka2", age:"23"},
      {name:"toka2", age:"21"}

    ],


    navigation: [

      {url:"www.google.com",page:"home"},
      {url:"www.fb.com",page:"about"},
      {url:"www.instagram.com",page:"gallery"},
      {url:"www.go.com",page:"contact"},
      {url:"www.foer.com",page:"video"},
      {url:"www.google2.com",page:"book"}


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



  deleteOutpootHandeler = (outIndex) => {
    
   
    this.state.persons.splice(outIndex,1)
    this.setState({person:this.state.persons})
  }


  testfuncton =  (indexvalue) => {


    
    
    document.getElementsByClassName("navlists")[indexvalue].classList.add("active")
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

     

    let navigation = (

      <div className="header">
            <ul>
              {this.state.navigation.map((value,index )=>{
                return( 
                  <Header hover={this.testfuncton.bind(this,index)} name={value.page} link={value.url}></Header>
                  // <li><a href={value.url}>{value.page}</a> </li>
                  )
                })}
            </ul>
          </div>
    )

    return (
      <div className="App">


       
          
           {navigation}
         
          
    
        
        <button onClick={this.clickFunction}>Clear </button>
        {this.state.showPersons === false ? <div>blablb</div>: null}
        {persons}
        {outPoot}
        

        


      </div>
    );
  }
  
}

export default App;
