import React, {Component, createContext} from "react";

export const ThemeContext = createContext();

class ThemeProvider extends Component {

    state = { 
        isDarkMode:false,
    }

    toggleTheme = ()=>{
        this.setState({ isDarkMode:!this.state.isDarkMode})
    }


    render(){
        return(
            <ThemeContext.Provider value={{...this.state,toggleTheme:this.toggleTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
            )
    }
}
export default ThemeProvider;