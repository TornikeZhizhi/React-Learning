import React ,{useEffect,useState}from "react";
import axios from "axios";




const FetchData =()=>{

    const [value, setValue] = useState("1");
    const [movie, setMovie] = useState("")
 
    useEffect(()=>{
        async function getData(){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${value}/`);
            setMovie(response.data)
        }
        getData()
    },[value])

    return (

        <React.Fragment>
            <h1>{value} - {movie.title}</h1>
            <select onChange={(event)=>{setValue(event.target.value)}}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </React.Fragment>
    )


}


export default FetchData;