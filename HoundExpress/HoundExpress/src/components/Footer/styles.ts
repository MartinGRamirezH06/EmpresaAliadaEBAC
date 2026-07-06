import styled from "styled-components";
import { animationTransition, breakpoints } from "../../Theme/Mixins";

export const FooterContainer = styled.footer`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    padding: 20px;
    gap:1rem;
    background-color:${({theme})=>theme.colors.primary};
    border-sizing:border-box;
    
    @media(max-width: ${breakpoints.phones}){
        grid-template-columns:1fr 1fr;
    }


    >section{

        border-sizing:border-box;
        font-size:20px;
        align-self: center;
        @media(max-width: ${breakpoints.tablets}){
            width: 100%;
        }

        @media(max-width: ${breakpoints.phones}){
            font-size: 1rem;
        }

        &:nth-child(1){
            >img{
                width:350px;
                display: flex;
                align-items: flex-start;
                @media(max-width: ${breakpoints.tablets}){
                    width: 15rem;
                }

                @media(max-width: ${breakpoints.phones}){
                    width:10rem;
                }
            }
        }
        &:nth-child(2){
            grid-column: 1;
            grid-row: 2;
            display:flex;
            flex-wrap: wrap;
            margin: 0.5rem;
            color:${({theme}) => theme.colors.principalText};
        }
        &:nth-child(3){
            grid-column: 1;
            grid-row: 3;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            gap: 0.5rem;
            margin: 0.5rem;
            color:${({theme}) => theme.colors.principalText};

                a{
                    display:inline-block;
                    margin-right: 0.5rem;
                    color: ${({theme}) => theme.colors.principalText};
                    text-decoration: underline;
                }


        }
        &:nth-child(4){
            grid-column: 2;
            grid-row: 1;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            color:${({theme}) => theme.colors.principalText};
            font-size:2rem;

            h3:first-child{
                color: ${({theme}) => theme.colors.hover};
            }

            @media(max-width: ${breakpoints.tablets}){    
                text-align: center;
            }

            @media(max-width: ${breakpoints.phones}){
                font-size:1rem;
            }
        }

        &:nth-child(5){
            grid-column: 2;
            grid-row: 2;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            

            a{
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
                margin:0.5rem;
                color: ${({theme}) => theme.colors.principalText};
                text-decoration: none;
                cursor:pointer;

                &:hover{
                    ${({theme}) => animationTransition(theme.colors.hover,'0.3s')}
                }
            }
        }
        &:nth-child(6){
            grid-column: 3;
            grid-row:1;
            display: flex;
            flex-wrap: wrap;
            flex-direction: column;
            color:${({theme}) => theme.colors.principalText};
            h3,p{
                font-size: 1.5rem;
            }

            @media(max-width: ${breakpoints.phones}){
                grid-column: 1;
                grid-row:4;
                h3,p{
                    font-size:1rem;
                }    
            }
        }
        &:nth-child(7){
            grid-column: 3;
            grid-row: 2;
            display: flex;
            flex-wrap: wrap;
            margin:0.5rem;
            flex-direction: column;
            color:${({theme}) => theme.colors.principalText};
            line-height: 0.8rem;
            @media(max-width: ${breakpoints.tablets}){
                line-height: 1.8rem;
            }
                
            h3,h4{
                font-size: 1.5rem;
            }
                
            @media(max-width: ${breakpoints.phones}){
                grid-column: 2;
                grid-row: 4;
            }
        }
        &:nth-child(8){
            grid-column: 3;
            grid-row: 3;
            display: flex;
            flex-wrap: wrap;
            margin: 0.5rem;
            flex-direction: column;
            color:${({theme}) => theme.colors.principalText};
            font-size: 1.5rem;

            @media(max-width: ${breakpoints.tablets}){
                font-size: 1rem;
            }

            @media(max-width: ${breakpoints.phones}){
                grid-column: 2;
                grid-row: 3;
            }
        }
    }

`;
export const ImgRedesContainer = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    box-sizing:border-box;

    a{
        width: 48px;
        display: block;
            
        img{
            width: 100%;
        }

        &:hover{
            ${({theme}) => animationTransition(theme.colors.hover,'0.3s')}
        }
    }
`;
