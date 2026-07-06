import styled from "styled-components";
import { breakpoints } from "../../Theme/Mixins";

export const HeaderContainer = styled.header`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: auto auto;
    padding: 43px 50px;
    background-color:${({theme}) => theme.colors.principalText};
    box-sizing:border-box;

    @media(max-width: ${breakpoints.tablets}){
        padding: 0;
        grid-template-rows: auto auto;
    }
    @media(max-width: ${breakpoints.phones}){
        padding: 0;
        grid-template-rows: auto auto auto auto;
    }

    img{
        width: 100%;
        
    }

    >:first-child{
        @media(max-width: ${breakpoints.tablets}){
            width:100%;
            display: flex;
            align-items: center;
            grid-column:1/3;    
        }
        @media(max-width: ${breakpoints.phones}){
            grid-column:1/4;
        }
    }
    
    >:nth-child(2){
        grid-column-start: 3;
        @media(max-width: ${breakpoints.phones}){
            grid-row-start:2;
            grid-column:1/4;

            h2{
                font-size:1.3rem;

            }
            a{
                font-size:1rem;
            }
        }
    }
    
    >:nth-child(3){
        grid-column-start:4;
        @media(max-width: ${breakpoints.phones}){
            grid-row-start:2;
            grid-column:5/6;

            h2{
                font-size:1.1rem;

            }
            a{
                font-size:1rem;
            }
        }
    }
    
    >:nth-child(4){
        grid-column-start: 5;
        align-items: center;
        justify-items: center;
        justify-content: center;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;

        label{
            display: flex;
            flex-wrap: wrap;
        }

        @media(max-width: ${breakpoints.phones}){
            font-size: 1rem;
        }
    }
    >:nth-child(5){
        background-color: ${({theme}) => theme.colors.colorEarring};
        padding: 0.5rem;
        box-sizing:border-box;
        text-align: center;
        color:${({theme}) => theme.colors.principalText};

        @media(max-width: ${breakpoints.tablets}){
            padding: 0rem;
            display: grid;
            align-items: center;
            grid-column: 1/6;
        }
        
        @media(max-width: ${breakpoints.phones}){
            grid-row:4;
            font-size: 0.8rem;
        }
    }
    
`;
export const HeaderContainer__NumbersContainer = styled.div`
    a{
        text-decoration: none;
        color:${({theme}) => theme.colors.colorTextTables}
    }
`;
export const HeaderContainer__Select = styled.select`
    width: 60%
    display:flex;
    flex-wrap: wrap;
    font-size: 25px;
    padding: 0.5rem 2rem;
    margin: 0.5rem;

    @media(max-width: ${breakpoints.phones}){
        padding: 0rem 0.5rem;
    }
`;
export const HeaderContainer__row2= styled.div`
    grid-column: 2/5;
    grid-row: 2;
    display:flex;
    align-items: center;
    box-sizing:border-box;
    background-color:${({theme}) => theme.colors.primary};

    @media(max-width: ${breakpoints.tablets}){
        grid-column:1/6;
    }
    @media(max-width: ${breakpoints.phones}){
        grid-row: 3;

    }
`;
