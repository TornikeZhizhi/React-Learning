import react from "react";
import React ,{Component}from "react";
import AddRec from "./AddResource";
import StoredRec from "./StoredResource";
import Wrapper from "./Wrapper/Wrapper";
import classes from "./Rec.module.css"
import FilterResources from "./FilterResources";
import FilterBox from "./filterExercise/FilterBox";
import ForCustomHook from "./filterExercise/ForCustomHook";
import FetchData from "./Axios/FetchData";



class ResourseMain  extends Component {

    state = {
        tabActive:false,
        storedData:[],
        filterData:[]
    }


    tabSwitchHandler = ()=> {
        this.setState({
            tabActive:!this.state.tabActive
        })
    }

    innerAddRecData = (data)=> {
        this.setState( (prevState)=>({
            storedData:[...prevState.storedData,data]
        }),() => this.setState({
            filterData:this.state.storedData,
            tabActive:true
        }))
    }
    
    innerDelIndex = (index)=>{

        this.setState((prevState)=>({
            storedData:prevState.storedData.filter((el,ind)=>{
                return el.id != index
            })
        }),()=>{
            this.setState({
                filterData:this.state.storedData
            })
            this.innerFilterWord()
        })   
    }

    innerFilterWord = (word) =>{
        // console.log(this.state.storedData)
        this.setState({
            filterData:this.state.storedData.filter((user) =>{
                return user.title.includes(word)
            }) 
        })

    

    }

    render(){

        return (
            <React.Fragment>
                <FetchData></FetchData>
                <br></br>
                <ForCustomHook></ForCustomHook>
                <br/>
                <FilterBox></FilterBox>
                <div className={classes.rec_tabs}>
                    <span  onClick={this.tabSwitchHandler} className={this.state.tabActive ?
                         classes.tab_active :null}>Stored Resources</span>
                    <span onClick={this.tabSwitchHandler} className={!this.state.tabActive ? 
                        classes.tab_active:null}>Add New Resources</span>
                </div>
                
                <FilterResources filterWord={this.innerFilterWord}></FilterResources>
               {this.state.tabActive &&  <Wrapper className="store_wrapper">
                    <StoredRec deleteIndex={this.innerDelIndex} data={this.state.filterData}></StoredRec> 
                </Wrapper>} 

                {!this.state.tabActive && <Wrapper>
                    <AddRec addRecData={this.innerAddRecData}></AddRec>
                </Wrapper>}
                
            </React.Fragment>
        )
    }   
}


export default ResourseMain;