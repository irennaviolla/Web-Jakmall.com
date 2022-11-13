import styled from "styled-components";

export const Summary = styled.div`
    float: right;
    width: 25%;
    height: 500px;

    .margin-change {
        margin: 15px 0 4px 0;
    }

    .green-color {
        margin: 0 0 4px 0;
        color: #68e2a6;
        font-weight: bold;
    }

    .homeSum {
        margin-top: 60%;
    }

    .finishSum {
        margin-top: 25%;
    }
`

export const FirstSum = styled.div`
    h1 {
        color: #ff8a00;
    }
`

export const SecondSum = styled.div`
    margin-top: 27%;

    table {
        border-spacing: 0 10px;
        width: 100%;
    }

    .rightTable {
        text-align: right;
    }
    
    h1 {
        color: #ff8a00;
    }
`

export const ThirdSum = styled.div`
    button {
        width: 100%;
        height: 60px;
        background-color: #ff8a00;
        color: white;
        border: 0;
        font-size: 16px;
        box-shadow: 3px 3px rgba(233,204,164,0.15);
    }
`