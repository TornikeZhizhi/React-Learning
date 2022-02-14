import React ,{useState} from "react";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props)=>{

    const [isEditing, setEditing] = useState(false)

    const saveExpenseDataHandle = (enteredExpenseData)=>{
        const expenseData = {
            ...enteredExpenseData,
            id:Math.random().toString()
        }
        // console.log(expenseData, "ds")

        props.onAddExpense(expenseData)
        // setEditing(false)

    }

    const startEditingHandler = () =>{
        setEditing(true)
    }

    const CanselEditingHandler = () =>{
        setEditing(false)
    }


    return(
        <div className="newexpense">
            {!isEditing && <button onClick={startEditingHandler}>add Expense form</button>}
            {isEditing && <ExpenseForm onCanselEditing={CanselEditingHandler} onSaveExpenseData={saveExpenseDataHandle}></ExpenseForm> }
        </div>
    )

}



export default NewExpense;