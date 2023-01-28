import React, { useState, useMemo } from "react";
import styled from "styled-components";
import { ChampCard } from "./ChampCard";
import { getRandomChamp } from "../util/getRandomChamp";
import vsDefault from "../images/vs_default.png";
import vsCorrect from "../images/vs_correct.png";
import vsWrong from "../images/vs_wrong.png";

const GameBoard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const CardContainer = styled.div`
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

const TextContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: ${props => props.fontSize};
    color: white;
`

export const ChampBoard = (props) => {
    const { championData, endGame } = props;
    const [leftCardChamp, setLeftCardChamp] = useState([]);
    const [rightCardChamp, setRightCardChamp] = useState([]);
    const [higherLower, setHigherLower] = useState(false);
    const [coverResult, setCoverResult] = useState(true);
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
                endGame(currentScore);
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

    useMemo(() => {
        const leftChamp = getRandomChamp(championData);
        const rightChamp = getRandomChamp(championData);
        const higherLower = parseInt(rightChamp.matchesPlayed, 10) >= parseInt(leftChamp.matchesPlayed, 10)

        setLeftCardChamp(leftChamp);
        setRightCardChamp(rightChamp);
        setHigherLower(higherLower);
    }, [championData]);

    return (
        <GameBoard>
            <CardContainer>
                <ChampCard data={leftCardChamp} />
                <VSContainer color={vsImg} />
                <ChampCard coverResult={coverResult} data={rightCardChamp} handleHigherClick={handleHigherClick} handleLowerClick={handleLowerClick} />
            </CardContainer>
            <TextContainer fontSize="25px">SCORE: {currentScore}</TextContainer>
        </GameBoard>
    )
}