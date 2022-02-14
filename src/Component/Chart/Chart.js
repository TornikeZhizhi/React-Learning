// import React ,{useState} from "react";
// import ChartBar from "./ChartBar";
// import "./chart.css"


// const Chart = (props)=>{

//     const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

//     const totalMaxium = Math.max(...dataPointValues)

//     return (
//         <div className="chart">

//             {props.dataPoints.map(dataPoint=>{

//                 <ChartBar value={dataPoint.value} maxValue={totalMaxium} label={dataPoint.label} key={dataPoint.label}></ChartBar>
//             })}
//         </div>
//     )

// }


// export default Chart;