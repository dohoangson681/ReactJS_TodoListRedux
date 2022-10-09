import styled from "styled-components";
export const ContainerTodoList = styled.div`
    border : 3px solid ${(props) => {
        return props.theme.boderColor ; 
    }} ; 
    width : 60% ; 
    padding : 5px 15px ; 
    margin-left : auto ; 
    margin-right : auto ; 
    margin-top : 50px ; 
    background-color : ${(props) => {
        return props.theme.bg ; 
    }} ; 
    color : ${(props) => {
        return props.theme.color ; 
    }} ;
    transition : all 1s ; 
` ; 