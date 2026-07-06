import styled from "styled-components";
import { animationTransition, breakpoints } from "../../Theme/Mixins";

const ButtonHeader = styled.button`
    font-size:23px;
    padding: 0.5rem;
    color: ${({theme})=> theme.colors.principalText};
    width: 100%;
    margin: 8px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    display:flex;
    justify-content: center;
    text-decoration: none;
    text-align:center;
    
    &:hover{
        ${({theme}) => animationTransition(theme.colors.hover,'0.3s')}
            border:solid 1px ${({theme}) => theme.colors.primary};
    }


    @media(max-width:${breakpoints.tablets}){
        cursor:default;
    }

    @media(max-width: ${breakpoints.phones}){
        font-size: 1rem;
        margin:0;
        padding:0;
    }
`;
const StyledButtonForm = styled.button`
    font-size:1.4rem;
    padding: 0.5rem;
    color: ${({theme})=> theme.colors.principalText};
    width: 50%;
    margin: 8px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colors.colorButtonForm};
    cursor: pointer;
    display:flex;
    justify-content: center;
    text-decoration: none;
    border-radius:1rem;
    border:solid 1px ${({theme}) => theme.colors.principalText};
    

    &:hover{
        ${({theme}) => animationTransition(theme.colors.hover,'0.3s')}
    }
`;

const StyledButtonModifiers = styled.button`
    font-size:14px;
    padding: 0.8rem;
    color: ${({theme})=> theme.colors.principalText};
    width: 100%;
    margin: 8px;
    box-sizing: border-box;
    background-color: ${({theme}) => theme.colors.primary};
    cursor: pointer;
    display:flex;
    justify-content: center;
    font-weight: 600;
    text-align: center;
    align-items:center;
    
    &:hover{
        ${({theme}) => animationTransition(theme.colors.hover,'0.3s')}
            border:solid 1px ${({theme}) => theme.colors.primary};
    }
`;
export{
    ButtonHeader,
    StyledButtonForm,
    StyledButtonModifiers
}