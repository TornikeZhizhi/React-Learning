import React, {Component, createContext} from "react";

export const FormContext = createContext();

class FormProvider extends Component {

    state = { 
        language:"english"
    }

    ChangeLanguage = (e)=>{
        this.setState({
            language:e.target.value
        })
    }


    render(){
        return(
            <FormContext.Provider value={{...this.state,ChangeLanguage:this.ChangeLanguage}}>
                {this.props.children}
            </FormContext.Provider>
            )
    }
}
export default FormProvider;