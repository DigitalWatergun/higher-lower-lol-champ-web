import React from "react";
import styled from "styled-components";
import { PlayButton } from "./PlayButton";

const GameOverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ScoreContainer = styled.div`
    margin-bottom: 250px;
`

const TextContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.fontSize};
    color: white;
    text-align: center;
    justify-content: center;
`

export const GameOver = (props) => {
    const {score, start} = props

    return (<GameOverContainer>
        <ScoreContainer>
            <TextContainer fontSize="40px">Score:</TextContainer>
            <TextContainer fontSize="100px">{score}</TextContainer>
        </ScoreContainer>
        <PlayButton start={start} message="PLAY AGAIN" />
    </GameOverContainer>)
}