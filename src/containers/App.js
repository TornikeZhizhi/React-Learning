import React, { Component } from "react";
import "./App.css";
import Blocks from "../Component/imgBlocks/Blocks";
import Nav from "../Component//header/Naviagtion";
import ToDoList from "../Component/ToDoList/TodoList";
import ExpenseMain from "../Component/Expense/ExpenseMain";
import AddUserMain from "../addUser/AddUserMain";
import ResourseMain from "../AddRecources/RecourcesMain";
class App extends Component {
  state = {
  
  };







  render() {
    return (
      <div className="App">


        <ResourseMain></ResourseMain>
        {/* <AddUserMain></AddUserMain> */}
        {/* <Nav></Nav>
        <ToDoList></ToDoList>
        <ExpenseMain></ExpenseMain> */}
        {/* <Blocks></Blocks> */}
    
      </div>
    );
  }
}

export default App;
