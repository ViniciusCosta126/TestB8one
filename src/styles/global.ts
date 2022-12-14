import {createGlobalStyle} from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body{
        width: 100%;
        height: 100vh;
        background: #E5E5E5;
    }
    body,button,input{
        font-family: 'Inter',sans-serif;
    }
    a{
        text-decoration: none;
    }
`