import React ,{useState} from "react";

const ExpenseForm = (props)=>{

    const [entedTitle, setTitle ] = useState("");
    const [entedAmount, setAmount ] = useState("");
    const [entedDate, setDate ] = useState("");

    // const [ userInput, SetUserInput] = useState({
    //     enteredTitle:"",
    //     enteredAmount:"",
    //     enteredDate:"",
    // })

    const titleChangeHandler = (event)=>{
        setTitle(event.target.value)

        // SetUserInput= (prevState)=>{
        //     return {...prevState,  enteredTitle:event.target.value }
        // }
    }

    const amountChangeHandler = (event) =>{
        setAmount(event.target.value)
    }

    const datehangeHandler = (event) =>{
        setDate(event.target.value)
    }

    const submitHandler=(event)=>{
        event.preventDefault()

        const expenseData = {
            title:entedTitle,
            amount:entedAmount,
            date:new Date(entedDate),
        }
        props.onSaveExpenseData(expenseData)

        setTitle("");
        setAmount("");
        setDate("");

    }




    return (
        <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new_expense__control">
                        <label>title</label>
                        <input value={entedTitle} onInput={titleChangeHandler} type="text"/>
                    </div>

                    <div className="new_expense__control">
                        <label>amount</label>
                        <input value={entedAmount} onInput={amountChangeHandler} type="number"/>
                    </div>

                    <div className="new_expense__control">
                        <label>Date</label>
                        <input value={entedDate} onInput={datehangeHandler} type="date"/>
                    </div>
                </div>
                <div>
                    <button type="button" onClick={props.onCanselEditing}>Cansel</button>
                    <button>Add Expense</button>
                </div>
            </form>
    )
}



export default ExpenseForm;