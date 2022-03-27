import React, {Component} from "react";
import classes from "./Context.module.css";
import {ThemeContext} from "./contexts/HeaderContext";

class MainHeader extends Component {

    static contextType = ThemeContext;
    render(){
        const {isDarkMode, toggleTheme} = this.context;
        return (
            <div className={classes.header} style={{backgroundColor:isDarkMode?"red":"green"}}>
                <ul>
                    <li>მთავარი</li>
                </ul>
                <button onClick={toggleTheme}>toggle Content</button>
            </div>
        )
    }

}



export default MainHeader;