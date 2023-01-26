import React from "react";
import styled from "styled-components";
import { StartButton } from "./StartButton";

const GameOverContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center
`

export const GameOver = (props) => {
    const {score, start} = props

    return (<GameOverContainer>
        Game Over. Score: {score}
        <StartButton start={start} message="PLAY AGAIN" />
    </GameOverContainer>)
}