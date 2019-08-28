import React from 'react';
import './App.css';
import Tokmarila  from './Person/Person.js'



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>I`m I React App</h1>
  
      <Tokmarila name="tornike"/>
      <Tokmarila name="shaqro">children 2</Tokmarila>
      <Tokmarila name="giusha" />
      </header>
    </div>
  );

  // return React.createElement('div',{className: 'App'}, React.createElement('h1',null,'I Am React App'))
}

export default App;
