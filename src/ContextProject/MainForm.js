import React, {Component} from "react";
import classes from "./Context.module.css"
import {FormContext} from "./contexts/FormContext";
// import {ThemeContext} from "./contexts/HeaderContext";


const words = {

    english:{
        sign:"sign-up",
        geo:"georgia",
        eng:"english"
    },
    georgia:{
        sign:"შესვლა",
        geo:"ქართული",
        eng:"ინგლისური"
    }
}

class ContextForm extends Component {

    static contextType = FormContext;
    render(){
        const {language,ChangeLanguage} = this.context;
        const {sign, geo, eng} = words[language]
        // console.log(isDarkMode)
        return (

            
            <form>
                <h1>{sign}</h1>
                <select value={language} onChange={ChangeLanguage}>
                    <option value="georgia">{geo}</option>
                    <option value="english">{eng}</option>
                </select>
            </form>
               
            
        )
    }

}



export default ContextForm;