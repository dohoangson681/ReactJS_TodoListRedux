import styled from 'styled-components' ; 
export const Button = styled.button`
    color : ${(props)=>{
        if(props.primaryFont){
            return 'white' ;
        }else {
            return 'black' ; 
        }
    }} ; 
    background-color : ${(props) => {
        if(props.primaryBg){
            return 'black' ;
        }else {
            return 'brown' ; 
        }
    }} ; 
    padding : 5px 15px ; 
    border-radius : 7px ; 
` ; 