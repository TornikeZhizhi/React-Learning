import React  from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{

    const saveExpenseDataHandle = (enteredExpenseData)=>{

        const expenseData = {

            ...enteredExpenseData,
            id:Math.random().toString()
        }
        // console.log(expenseData, "ds")

        props.onAddExpense(expenseData)

    }


    return(
        <div className="newexpense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandle}></ExpenseForm>
        </div>
    )

}



export default NewExpense;