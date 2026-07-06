import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        font-family: "Opens Sans", sans-serif;
        font-optical-sizing: auto;
        font-style: normal;
        font-variation-settings:"wdth" 100;
    }
    
    body{
        width:100%;
        margin: 0;
        box-sizing: border-box;
    }

    footer{
        max-height: 400px;
        overflow: auto;
    }
`