import React, { Component } from "react";
import ExpenseItem from "./ExspenseItem";


function ExpenseMain() {

     const expenses = [
     {title:"car Insurance", amount:434.42, date:new Date(2021,1,5)},
     {title:"car Insurance2", amount:3.42, date:new Date(2021,6,5)},
     {title:"car Insurance33", amount:543534.42, date:new Date(2021,5,5)},

    ]
  
  
    
  
      return (
        <div className="App2">
        
         <ExpenseItem  title={expenses[0].title} 
          amount={expenses[0].amount}
          date={expenses[0].date} ></ExpenseItem> 
         <ExpenseItem  title={expenses[1].title} 
          amount={expenses[1].amount}
          date={expenses[1].date} ></ExpenseItem> 
         <ExpenseItem  title={expenses[2].title} 
          amount={expenses[2].amount}
          date={expenses[2].date} ></ExpenseItem> 
        
          
        </div>
      );
    }
  

export default ExpenseMain;