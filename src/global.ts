import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: "Roboto", "sans-serif";
    }

    body{
        background-color:  ${(props) => props.theme['gray-900']};
        
        padding: 5rem 1rem
    }
    
    input, textarea, button{
        font-size: 1.125rem;
        color: "white"
    }:focus{
        outline: 0
    }
`
