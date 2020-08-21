import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #EEE9E9;
        font-family: 'Open Sans', sans-serif;
        font-size: 24px;
    }
    
    a{
        text-decoration: none;
        color:black;
    }
    input:focus{
        outline:none;
    }
    button{
        border: none;
        background:inherit;
        cursor:pointer;

    }
    button:focus{
        outline:none;
    }
`;
