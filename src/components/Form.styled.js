import styled from "styled-components";

export const Form = styled.input`
    width: 80%;
    height: 50px;
    padding-left: 15px;
    padding-right: 15px;

    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`

export const FormAddress = styled.textarea`
    width: 80%;
    height: 150px;
    padding-left: 15px;
    padding-right: 15px;
    padding-top: 15px;
    resize: none;
    font-family: "Arial";
`
