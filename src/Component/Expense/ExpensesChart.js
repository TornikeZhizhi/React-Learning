// import React ,{useState} from "react";

// import Chart from "../Chart/Chart";

// const ExpenssChart = (props)=>{


//     const ChartDataPoint = [

//         {label:"Jan", value:0},
//         {label:"Feb", value:0},
//         {label:"Mar", value:0},
//         {label:"Apr", value:0},
//         {label:"May", value:0},
//         {label:"Jan", value:0},
//         {label:"Jul", value:0},
//         {label:"Aug", value:0},
//         {label:"Sept", value:0},
//         {label:"Nov", value:0},
//         {label:"Dec", value:0},
//     ]

//     for(const expense of props.expenses){

//         const expensesMonth = expense.date.getMonth();

//         ChartDataPoints[expensesMonth].value += expense.amount
//     }

//     return (
//         <Chart dataPoints={ChartDataPoints}></Chart>
//     )

// }



// export default ExpenssChart;