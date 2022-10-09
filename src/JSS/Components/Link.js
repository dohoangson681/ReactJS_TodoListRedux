// export const Link = ({className , children , ...restProps})=>(
//     <a className={className}>
//         {children}
//     </a>
// )
import styled from "styled-components";
export const Link = ({className , children , ...rest}) => {
    return <a className={className}>
        {children}
    </a>
}
export const StyledLink = styled(Link)`
    color : red ; 
    background-color : yellow ; 
` ; 