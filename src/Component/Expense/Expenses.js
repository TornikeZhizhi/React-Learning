import React, {useState} from "react";
import ExpenseItem from "./ExspenseItem";
import Card from "./card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpensesList";
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020")

   const filterHandler = (selectedYear)=>{
     setFilteredYear(selectedYear)
   }

   const filteredExpenses = props.items.filter(expense=>{

    return expense.date.getFullYear().toString() === filteredYear;
   })





    return (

        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler}></ExpensesFilter>
            <Card className="">

            <ExpenseList items={filteredExpenses}></ExpenseList>
            
           

            </Card>
          </div>
    )
}

export default Expenses;