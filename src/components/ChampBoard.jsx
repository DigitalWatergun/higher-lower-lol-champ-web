import React, { useState } from "react";
import styled from "styled-components";
import { ChampCard } from "./ChampCard";
import { getRandomChamp } from "../util/getRandomChamp";
import vsDefault from "../images/vs_default.png";
import vsCorrect from "../images/vs_correct.png";
import vsWrong from "../images/vs_wrong.png";

const GameBoard = styled.div`
    background-color: LightSlateGrey;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ScoreDisplay = styled.p`
    margin: 5px;
`

const CardContainer = styled.div`
    background-color: gray;
    display: flex;
    align-items: center;
    justify-content: center;
`

const VSContainer = styled.div`
    width: 82px;
    height: 82px;
    background: url(${props => props.color});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

export const ChampBoard = (props) => {
    const { championData } = props;
    const [leftCardChamp, setLeftCardChamp] = useState(getRandomChamp(championData));
    const [rightCardChamp, setRightCardChamp] = useState(getRandomChamp(championData));
    const [coverResult, setCoverResult] = useState(true);
    const [higherLower, setHigherLower] = useState(parseInt(rightCardChamp.matchesPlayed, 10) >= parseInt(leftCardChamp.matchesPlayed, 10));
    const [currentScore, setCurrentScore] = useState(0);
    const [vsImg, setVSImg] = useState(vsDefault);

    let userChoice;
    const checkUserChoice = (choice) => {
        setCoverResult(false);
        console.log("Score: " + currentScore);
        console.log("User Choice: " + choice, "HigherLower: " + higherLower)
        setTimeout(() => {
            if (choice === higherLower) {
                setVSImg(vsCorrect);
            } else {
                setVSImg(vsWrong);
            }
        }, 1000)
        setTimeout(() => {
            if (choice === higherLower) {
                setCurrentScore(currentScore + 1);
                const newChamp = getRandomChamp(championData);
                setLeftCardChamp(rightCardChamp);
                setRightCardChamp(newChamp);
                setHigherLower(parseInt(newChamp.matchesPlayed, 10) >= parseInt(rightCardChamp.matchesPlayed, 10));
                setCoverResult(true);
                setVSImg(vsDefault);
            } else {
                props.endGame(currentScore);
            }
        }, 2000);
    }


    const handleHigherClick = () => {
        userChoice = true;
        checkUserChoice(userChoice);
    }

    const handleLowerClick = () => {
        userChoice = false;
        checkUserChoice(userChoice);
    }

    return (
        <GameBoard>
            <CardContainer>
                <ChampCard data={leftCardChamp} />
                <VSContainer color={vsImg} />
                <ChampCard coverResult={coverResult} data={rightCardChamp} handleHigherClick={handleHigherClick} handleLowerClick={handleLowerClick} />
            </CardContainer>
            <ScoreDisplay>Score: {currentScore}</ScoreDisplay>
        </GameBoard>
    )
}