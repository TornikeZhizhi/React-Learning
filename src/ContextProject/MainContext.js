import React, {Component} from "react";
import ContextForm from "./MainForm";
import MainHeader from "./MainHeader";
import ThemeProvider from "./contexts/HeaderContext";
import FormProvider from "./contexts/FormContext";
import Wrapper from "./wrapper/Wrapper";

class MainContext extends Component {


    render(){

        return (
            <React.Fragment>
                <FormProvider>
                    <ThemeProvider>
                        <Wrapper>
                            <MainHeader></MainHeader>
                            <ContextForm></ContextForm>
                        </Wrapper>
                    </ThemeProvider>
                </FormProvider>
            </React.Fragment>
        )
    }

}



export default MainContext;