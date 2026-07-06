import styled from "styled-components";
import { breakpoints } from "../../Theme/Mixins";
import type theme from "../../Theme/theme";

interface TdBodyProps{
    $estado?:"Pendiente" | "EnTransito" | "Entregado" | "activas";
}

interface MainContainerProps{
    $hasPadding?: boolean;
}


export const MainContainer = styled.main<MainContainerProps>`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    box-sizing: border-box;
    padding: 2rem;
    gap:1rem;
    @media(max-width: ${breakpoints.tablets}){
        padding:3rem;
        margin-top: 1rem;
    }

    @media(max-width: ${breakpoints.phones}){
        padding:${({$hasPadding}) => $hasPadding ? "1rem" : 0};
    }
`;
export const Banner__Container = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-self: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    padding: 1rem;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.principalText};
    box-sizing:border-box;

    >article{
        h3{
            font-size: 40px;
            font-weight: 600;
        }
        
        p{
            font-size: 30px;
        }
        &:nth-child(2){
            width: 100%;
            background-image: url(/src/img/bannerProvisional.png);
            background-repeat: no-repeat;
            background-size: cover;
            color: ${({theme})=> theme.colors.colorTextTables};
            background-position-y: 50% ;
            box-sizing: border-box;
        }
    }

    @media(max-width: ${breakpoints.phones}){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr;
        padding: 0;

        >article{
            h3{
                font-size:1.5rem;
            }
            
            p{
                font-size:1rem;
            }

            &:nth-child(2){
                grid-row: 1;
            }
        }
    }
`;
export const ContainerFormImg = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    align-self: center;
    justify-content: center;
    justify-items: center;
    text-align: center;
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.principalText};
    box-sizing:border-box;

    @media(max-width: ${breakpoints.tablets}){
        grid-template-columns: 1fr;
        grid-template-rows: 0.5fr 1fr;

    }
    >article{
        width: 100%;
        height: 100%;
        display: flex;
        flex-wrap: wrap;
        background-image: url(/src/img/Avion.png);
        background-repeat: no-repeat;
        background-size: cover;
        color: ${({theme}) => theme.colors.principalText};
        box-sizing: border-box;

        @media(max-width: ${breakpoints.tablets}){
            grid-row: 1;
            background-position: center;
        }

        @media(max-width: ${breakpoints.phones}){
            grid-row: 1;
            background-position: center;
            max-heigth:10rem;
        }
    }
        
`;
export const FormRegistro = styled.form`
    width: 100%;
    display: grid;
    gap:1rem;
    background-color:${({theme}) => theme.colors.colorForm};
  
    >div{
        display: flex;
        flex-wrap: wrap;            
        flex-direction: column;
        font-size: 25px;
        text-align: initial;
        margin: 0rem 1rem; 
        
        >h2{
            text-align: center;
            font-size: 30px;
        }

        &:last-child{
            width: 90%;
            align-items: center;
            justify-content: center;
            display: flex;
        }
    }
    input, select{
        width: 50%;
        font-size: 20px;
        height: 3rem;
    }

    @media(max-width: ${breakpoints.phones}){
        margin:0;
        input, select{
            width: 100%;
            font-size: 20px;
            height: 2rem;
        }   
    }
`;
export const ContainerPanelEstados = styled.section`
    width: 100%;
    padding: 1.3rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    font-size: 25px;
    border: 3px solid ${({theme}) => theme.colors.colorTextTables};
    box-sizing: border-box;
    
    >h2{
        text-align: center;
    }

    @media(max-width: ${breakpoints.phones}){
        thead{
            display: none;
        }

        tr{
            display: block;
            margin-bottom: 1rem;
            padding: 0.5rem;
            border: solid 1px ${({theme}) => theme.colors.colorForm}
        }

        td{
            display: flex;
            justify-content: space-between;
            padding: 0.3rem 0;
            font-size: 1rem; 
            border: solid 1px ${({theme}) => theme.colors.colorForm}
        }

        td::before{
            content: attr(data-label);
            font-weight: bold;
        }
    }
`;
export const TableHeader = styled.th`
    color: ${({theme}) => theme.colors.principalText};
    background-color: ${({theme}) => theme.colors.primary};
`;

export const TableData= styled.td<TdBodyProps>`
    background-color:${({$estado,theme}) => {
        if($estado === "Pendiente") return theme.colors.colorEarring;
        if($estado === "EnTransito") return theme.colors.colorTransit;
        if($estado === "Entregado") return theme.colors.colorDelivered;
    }};
    color:${({theme}) => theme.colors.colorTextTables};
    text-align: center;
`;
export const ContainerListaGuias = styled.section`
    width:100%;
    gap: 1rem;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap:wrap;
    font-size: 25px;
    border: 3px solid ${({theme}) => theme.colors.colorForm};
    box-sizing:border-box;
    
    p{
        text-align: center;
        font-weight: 600;
    }
    
    td,th{
        padding: 0.5rem;
        word-wrap: breack-word;
    }
    
    table{
        box-sizing:border-box;
        margin: 0.5rem;
        table-layout: auto;
        overflow-x: auto;
        word-break: break-word;
    }

    thead{
        background-color: ${({theme})=> theme.colors.primary};
        color: ${({theme}) => theme.colors.principalText};
        box-sizing: border-box;
    }

    tbody{
        box-sizing: border-box;
        tr {
            td[scope=row]{
                text-align:center;
                background-color: rgb(229, 225, 222);
                gap: 1rem;
            }
            td:last-child{
                display: flex;
                
            }
        }
    }

    @media(max-width: ${breakpoints.tablets}){
        tr{
            border:1px solid ${({theme}) =>theme.colors.colorTextTables};
            display: block;
            margin-bottom: 1rem;
            padding: 0.5rem;
        }

        td{
            display: flex;
            justify-content: space-between;
            padding: 0.3rem 0;
            font-size:20px;
            border-top:none;
            border-right:none;
            border-left: none;
            border-bottom:1px solid ${({theme}) =>theme.colors.colorTextTables};
        }
        thead{
            display: none;
        }
        td::before{
            content: attr(data-label);
            font-weight: bold;
        }
    }

    @media(max-width: ${breakpoints.phones}){
        td{
            font-size: 1rem;
        }
    }
`;
export const ContainerHistorial = styled.section`
    display: grid;
    grid-template-rows: auto auto;
    position: fixed;
    right: 3%;
    top: 14rem;
    width: 380px;
    padding: 25px;
    max-height: 70%;
    background-color: ${({theme}) => theme.colors.principalText};
    box-shadow: -19px -1px 22px 15px rgba(0,0,0,0.30);

    .historial-container-cerrar{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        .iconClose{
            width: 2rem;
            .imgClose{
                width: 100%;
            }
        }
    }
    .historial-container-Titulo{
        grid-row: 2;     
        display: flex;
        justify-content: center;
        text-align: center;
        title{
            font-size: 1.5rem;
            font-weight: 600;
        }   
    }
    .historial-container-Registro{
        grid-row: auto;
        margin:1em;
        font-size: 1.3rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    @media(max-width: ${breakpoints.phones}){
        width:20rem;
    }
`;

