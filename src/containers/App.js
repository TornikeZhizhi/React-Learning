import React, { Component } from "react";
import "./App.css";
import "../Component/Person.css";
import Blocks from "../Component/Blocks.js";
import Nav from "../Component/Navigation.js";

class App extends Component {
  state = {
    persons: [],

    userInput: "Default Name",
    divsShow: true
  };

  inputHandeler = event => {
    this.setState({
      userInput: event.target.value
    });
  };

  //Add Block
  addblockFunction = () => {
    this.setState({ divsShow: true });
    var x = this.state.persons.push({
      name: this.state.userInput,
      age: this.state.persons.length + 1
    });
    this.setState({ person: x });
  };
  // Delete Block
  deletediv = clickIndex => {
    const y = this.state.persons;
    y.splice(clickIndex, 1);
    this.setState({ persons: y });
  };

  // Delete Block
  deleteBlock = () => {
    this.setState({
      divsShow: false,
      persons: []
    });
  };

  render() {
    let divs;

    if (this.state.divsShow === true) {
      divs = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <div key={index}>
                My name is {person.name} and i am {person.age}
                <span onClick={() => this.deletediv(index)} className="close">
                  X
                </span>{" "}
              </div>
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <Nav></Nav>
        <input type="text" onChange={this.inputHandeler}></input>
        {divs}
        <button onClick={this.addblockFunction}>ADD</button>
        <button onClick={this.deleteBlock}>Clear All</button>
      </div>
    );
  }
}

export default App;
