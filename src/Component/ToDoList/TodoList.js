import React, { Component } from "react";



class ToDoList extends Component {
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
  
      this.setState(prev => ({
        persons: [
          ...prev.persons,
          {
            name: this.state.userInput,
            age: this.state.persons.length + 1
          }
        ]
      }));
      
    };
    // Delete Block
    deletediv = clickIndex => {
      this.setState(prev => ({
        persons: prev.persons.filter((el, i) => i != clickIndex)
      }));
    };
  
    // Delete Block
    render() {
      let divs;
  
      if (this.state.divsShow === true) {
        divs = (
          <div>
            {this.state.persons.map((person, index) => {
              return (
                <>
                  {
                    <div>
                      My name is {person.name} and i am {person.age}
                      <span
                        onClick={() => this.deletediv(index)}
                        className="close"
                      >
                        X
                      </span>
                    </div>
                  }
                </>
              );
            })}
          </div>
        );
      }
  
      return (
        <div className="App">
      
          <input type="text" onChange={this.inputHandeler}></input>
          {divs}
          <button onClick={this.addblockFunction}>ADD</button>
        </div>
      );
    }
  }
  

export default ToDoList;