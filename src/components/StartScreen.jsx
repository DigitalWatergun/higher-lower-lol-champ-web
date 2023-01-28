import React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";
import { introText } from "../util/introText";

const StartContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-bottom: 50px;
`

const TextContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.fontSize};
    color: white;
    align-self: flex-start;
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 400px;
    text-align: center;
`

export const StartScreen = (props) => {
    const { start, message } = props;

    return (<StartContainer>
        <TextContainer fontSize="18px">{introText}</TextContainer>
        <PlayButton start={start} message={message}></PlayButton>
    </StartContainer>
    )
}