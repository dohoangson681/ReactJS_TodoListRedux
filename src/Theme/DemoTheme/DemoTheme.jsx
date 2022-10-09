import React, { Component , Fragment} from 'react'
import styled , {ThemeProvider} from 'styled-components'
let darkTheme = {
    bg : "black" , 
    color : "white"
} ; 
let lightTheme = {
    bg : "white" , 
    color : "black"
}
export default class DemoTheme extends Component {
    state = {
        theme : darkTheme
    }
  render() {
 
    const DivStyle = styled.div`
        color : ${props => props.theme.color} ; 
        background-color : ${props => props.theme.bg} ; 
        text-align : center ;
        transition : all .5s ; 
    ` ; 
    return (
        <Fragment>
             <ThemeProvider theme = {this.state.theme}>
              <DivStyle>DemoTheme</DivStyle>
            </ThemeProvider>
            <button onClick={()=>{
                this.setState({
                    theme : darkTheme, 
                })
            }} className='btn btn-dark'>Dark Theme</button>
            <button onClick={()=>{
                this.setState({
                    theme : lightTheme, 
                })
            }} className='btn btn-info'>Light Theme</button>
        </Fragment>
       
    )
  }
}

