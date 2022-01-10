import React from "react";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {

   

    return (
        <div className="expenseitem">
           <ExpenseDate date={props.date}></ExpenseDate>
            <div>
                <h2>{props.title}</h2>
                <div>{props.amount}$</div>
            </div>
        </div>
    )
}

export default ExpenseItem;