import React, {Component} from "react";
import {ThemeContext} from "../contexts/HeaderContext";


class Wrapper extends Component {

    static contextType = ThemeContext;

    render (){
        const {isDarkMode} = this.context;
        const styles = {
            backgroundColor:isDarkMode ? "antiquewhite" : "white",
            height:"100vh",
            width:"100vw"
        }
        
        return (
            <div style={styles}>
                {this.props.children}
            </div>
        )
    }
}



export default Wrapper;