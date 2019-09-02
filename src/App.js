import React, {Component} from 'react';
import './App.css';
import './Person/Person.css';
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

   let outPoot = (

      <div>
        {
          this.state.persons.map((value,index)=> {

            return(

             <div>
               <UserOutpoot  key={index} clicked={this.deleteOutpootHandeler.bind(this,index)} name={value.name} age={index}></UserOutpoot>
            </div>
            
            )
          })
 


        }
      
      </div>  
    )

     

    let navigation = (

      <div className="header">
            
                  <Header  data={this.state.navigation} ></Header>
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
