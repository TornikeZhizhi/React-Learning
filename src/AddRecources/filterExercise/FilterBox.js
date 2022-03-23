import React, {Component} from "react";



class FilterBox  extends Component {


state = {

   films:[
       {name:"spider", text:"bla bla bla"},
       {name:"batman", text:"haha haha haha"},
       {name:"panda",text:"yeyeye ye ye ye "}
   ],
   filterData:[]

}


componentDidMount=()=>{

    this.setState({
        filterData:this.state.films
    })
}

filterHandler = (event)=>{

    let filterDa = this.state.films.filter((item)=>{
        return item.name.includes(event.target.value)
    })
   
    this.setState({
        filterData:filterDa
    })

}

render(){
    return (

        <React.Fragment>
        <input  onChange={this.filterHandler} type="text" />
        {this.state.filterData.map((item)=>{
            return (
                <div>
                    {item.name} - {item.text}
                </div>
            )
        })}
        </React.Fragment>
    )
}


}


export default FilterBox;