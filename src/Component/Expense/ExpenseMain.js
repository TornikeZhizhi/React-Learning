import React, { useState } from "react";
import Expenses from "./Expenses";
import NewExpense from "./newExpense/NewExpense";



const Dummy_expenses = [
  {title:"car1", amount:434.42, date:new Date(2021,1,5)},
  {title:"car2", amount:3.42, date:new Date(2021,6,5)},
  {title:"car3", amount:543534.42, date:new Date(2021,5,5)},

 ]
 


function ExpenseMain() {

  const [expenses, setExpenses] = useState(Dummy_expenses)

    const addExpenseHandler =(expense)=>{
      setExpenses((prevExpense)=>{
        return [expense, ...prevExpense]
      });
      console.log(expenses)
    }
  
    
  
      return (
        <div className="App2">
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <Expenses items={expenses}></Expenses>
        
          
        </div>
      );
    }
  

export default ExpenseMain;