import React from "react";
import ExpenseItem from "./ExspenseItem";

const ExpenseList = props => {


// let expenseContent = <p>no expense found</p>

// if (props.items.length>0) {
    
//         expenseContent = props.items.map((expense) => (
//             <ExpenseItem
//                 key={expense.id}
//                 title={expense.title}
//                 amount={expense.amount} 
//                 date={expense.date}>
//             </ExpenseItem>
//         ))
// }

if (props.items.length ===0) {
    return <h2>Found no expenses</h2>
}



return (
    <ul>
        {
        props.items.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount} 
                date={expense.date}>
            </ExpenseItem>
        ))
        }
       
    </ul>
)


}



export default ExpenseList;