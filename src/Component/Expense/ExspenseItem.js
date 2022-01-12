import React, {useState} from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./card";




function ExpenseItem(props) {


 const [title,setTitle] = useState(props.title)


   const clickHandler =()=>{
       setTitle("updated")
      console.log(title)
   }


    return (
        <Card className={"expenseitem back"}>
           <ExpenseDate date={props.date}></ExpenseDate>
            <div>
                <h2>{title}</h2>
                <div>{props.amount}$</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    )
}

export default ExpenseItem;