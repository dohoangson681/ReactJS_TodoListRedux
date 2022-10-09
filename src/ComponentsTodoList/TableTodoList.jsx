import styled from "styled-components";
export const TbTodoList = styled.table`
    border : 1px solid ${(props) => {
        return props.theme.bdColTB ;
    }} ; 
    color : ${(props) => {
        return props.theme.color ; 
    }}
`