import React from "react";
import ExpenseItem from "./ExspenseItem";

const ExpenseList = props => {


let expenseContent = <p>no expense found</p>

if (props.items.length>0) {
    
    expenseContent = props.items.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount} 
            date={expense.date}>
        </ExpenseItem>
     ))
}




return (
    <div>

        {expenseContent}
    </div>
)


}



export default ExpenseList;