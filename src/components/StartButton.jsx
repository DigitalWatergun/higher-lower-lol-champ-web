import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: green;
    border-radius: 50%;
    padding: 25px;
`

export const StartButton = (props) => {
    const { start } = props;

    return (<Button onClick={start}>Start
    </Button> )
}