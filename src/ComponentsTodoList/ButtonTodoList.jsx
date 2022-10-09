import styled from "styled-components";
export const  BtnStyle = styled.button`
    padding : 5px 15px ; 
    border-radius : 3px ; 
    &:hover {
        opacity : 0.8 ; 
    }
    background-color : ${(props) => {
        return props.theme.bg ; 
    }} ; 
    border : 1px solid ${(props) => {
        return props.theme.borderBtnColor ; 
    }} ; 
    color : ${(props) => {
        return props.theme.color ; 
    }} ; 
    transition : all .5s ;
   &:hover {
    color : ${(props) => {
        return props.theme.bg ; 
    }} ;
    background-color : ${(props) => {
        return props.theme.color ; 
    }} ; 
    border : 1px solid ${(props) => {
        return props.theme.color ; 
    }} ;
   } 
` ; 