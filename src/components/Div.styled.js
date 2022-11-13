import styled from "styled-components";

export const DivDelivery = styled.div`
    float: left;
    width: 55%;
`

export const DivArrow = styled.div`
   display: flex;
   align-items: center;
`

export const DivForm = styled.div`
    margin-bottom: 10px;
`

export const CenterDiv = styled.div`
    float: left;
    width: 74%;
    height: 500px;
    border-right: solid 1px #ffe4b8;

    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 40px;
        color: #ff8a00;
    }
`

export const InlineDiv = styled.div`
    display: inline-block;
    width: 15%;
    color: #a9a9aa;
    border: solid 1px #c4c4cc;
    padding: 10px 20px;
    margin-right: 15px;
    height: 40px;
    margin-bottom: 50px;

    p {
        margin: 0;
    }

    &:hover {
        cursor: pointer;
    }

    &.choosed{
        border: "solid 1px #4ae399";
        background-color: "#e9faf1";
        color: "black";
    }
`