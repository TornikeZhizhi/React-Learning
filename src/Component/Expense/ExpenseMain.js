import React, { Component } from "react";
import Expenses from "./Expenses";
import NewExpense from "./newExpense/NewExpense";

function ExpenseMain() {

     const expenses = [
     {title:"car Insurancfe", amount:434.42, date:new Date(2021,1,5)},
     {title:"car Insurance2", amount:3.42, date:new Date(2021,6,5)},
     {title:"car Insurance33", amount:543534.42, date:new Date(2021,5,5)},

    ]
  
  
    
  
      return (
        <div className="App2">
        <NewExpense></NewExpense>
        <Expenses items={expenses}></Expenses>
        
          
        </div>
      );
    }
  

export default ExpenseMain;