import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body{
        background-color: #EEE9E9;
    }
    span{
        font-size: 24px;

    }
    a{
        text-decoration: none;
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
