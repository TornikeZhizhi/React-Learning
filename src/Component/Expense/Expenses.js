import React, {useState} from "react";
import ExpenseItem from "./ExspenseItem";
import Card from "./card";
import ExpensesFilter from "./ExpenseFilter";
function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020")

   const filterHandler = (selectedYear)=>{
    console.log(selectedYear);

    setFilteredYear(selectedYear)
   }

    return (

        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterHandler}></ExpensesFilter>
            <Card className="">
            {
            props.items.map((expense) => (
                <ExpenseItem
                 title={expense.title}
                amount={expense.amount} 
                date={expense.date}>
                </ExpenseItem>

             ))
            }

            </Card>
          </div>
    )
}

export default Expenses;