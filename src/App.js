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

  switchNameHandeler = () => {

    this.setState({
      persons:[

        {name:"tokaguja", age:"22"},
        {name:"toka2", age:"23"},
        {name:"toka2", age:"21"}

    ]
  })

  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <h1>I`m I React App</h1>

        <button onClick={this.switchNameHandeler}>Switch Naame</button>
        <Tokmarila name={this.state.persons[0].name}/>
        <Tokmarila name={this.state.persons[1].name}>children 2გ</Tokmarila>
        <Tokmarila name={this.state.persons[2].name} />
        </header>
      </div>
    );
  }
  // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'I Am React App'))
}

export default App;
