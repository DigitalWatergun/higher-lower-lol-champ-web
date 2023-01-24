import React from "react";
import styled from "styled-components";

const Button = styled.button`
    background-color: green;
    border-radius: 50%;
    padding: 25px;
`

export const StartButton = (props) => {

    return (<Button onClick={props.setIsPlaying}>Start
    </Button> )
}