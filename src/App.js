import React, {Component} from 'react';
import './App.css';
import Tokmarila  from './Person/Person.js'



class App extends Component {

  state = {
    persons: [

      {name:"toka", age:"22"},
      {name:"toka2", age:"23"},
      {name:"toka2", age:"21"}

    ]
  }

  switchNameHandeler = (newName) => {

    this.setState({
      persons:[

        {name:newName, age:"22"},
        {name:"nino1", age:"23"},
        {name:"nino1", age:"21"}

    ]
  })

  }


  nameChangeHandeler = (event) => {
    this.setState({
      persons:[

        {name:'max', age:"22"},
        {name:event.target.value, age:"23"},
        {name:"nino1", age:"21"}

    ]
  })

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>I`m I React App</h1>

        <button onClick={()=> this.switchNameHandeler("maximilian")}>Switch Naame</button>
        <Tokmarila click={this.switchNameHandeler.bind(this,'kaxa2')} name={this.state.persons[0].name}/>
        <Tokmarila changed={this.nameChangeHandeler} name={this.state.persons[1].name}>children 2გ</Tokmarila>
        <Tokmarila name={this.state.persons[2].name} />
        </header>
      </div>
    );
  }
  // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'I Am React App'))
}

export default App;
