import styled from "styled-components";
export const SelectTodoList = styled.select`
    border : 1px solid ${(props) => {
        return props.theme.borderColor ; 
    }} ; 
    border-radius : 5px ; 
    background-color : ${(props) => {
        return props.theme.bgSelect ; 
    }} ; 
    width : 100% ;   
    transition: all .5s ; 
    color : ${(props) => {
        return props.theme.colorSelect ; 
    }} ; 
    // &:hover {
    //     background-color : black ; 
    // }
` ; 