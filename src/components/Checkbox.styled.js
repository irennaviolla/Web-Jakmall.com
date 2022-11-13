import styled from "styled-components";

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    vertical-align: middle;
    margin-right: 10px;
     /* removing default appearance */
    -webkit-appearance: none;
    appearance: none;
    /* creating a custom design */
    width: 16px;
    height: 16px;
    border-radius: 0.15px;
    border: 2px solid #96edbc;
    outline: none;
    color: #96edbc;
    cursor: pointer;

    &:checked {
        background: #96edbc;
        border-color: #96edbc;
    }
`