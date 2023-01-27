import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ChampCard } from "./ChampCard";
import { getRandomChamp } from "../util/getRandomChamp";

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
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`

const VSContainer = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.color};
`

export const ChampBoard = (props) => {
    const { gameState, championData } = props;
    const [leftCardChamp, setLeftCardChamp] = useState([]);
    const [rightCardChamp, setRightCardChamp] = useState([]);
    const [coverResult, setCoverResult] = useState(true);
    const [higherLower, setHigherLower] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);
    const [vsColor, setVSColor] = useState("gray");

    let userChoice;
    const checkUserChoice = (choice) => {
        setCoverResult(false);
        console.log("Score: " + currentScore);
        console.log("User Choice: " + choice, "HigherLower: " + higherLower)
        setTimeout(() => {
            if (choice === higherLower) {
                setVSColor("green")
            } else {
                setVSColor("red")
            }
        }, 1000)
        setTimeout(() => {
            if (choice === higherLower) {
                setCurrentScore(currentScore + 1);
                const newChamp = getRandomChamp(championData);
                setLeftCardChamp(rightCardChamp);
                setRightCardChamp(newChamp);
                setCoverResult(true);
                setHigherLower(parseInt(newChamp.matchesPlayed, 10) >= parseInt(rightCardChamp.matchesPlayed, 10))
                setVSColor("gray");
            } else {
                props.endGame(currentScore);
            }
        }, 2000);
    }


    const handleHigherClick = () => {
        userChoice = true
        checkUserChoice(userChoice);
    }

    const handleLowerClick = () => {
        userChoice = false
        checkUserChoice(userChoice)
    }


    useEffect(() => {
        console.log("Game state: " + gameState)
        const leftChamp = getRandomChamp(championData);
        const rightChamp = getRandomChamp(championData);
        const higherLower = parseInt(rightChamp.matchesPlayed, 10) >= parseInt(leftChamp.matchesPlayed, 10)

        setLeftCardChamp(leftChamp);
        setRightCardChamp(rightChamp);
        setHigherLower(higherLower);
    }, [gameState, championData]);

    return (
        <GameBoard>
            <ScoreDisplay>Score: {currentScore}</ScoreDisplay>
            <CardContainer>
                <ChampCard data={leftCardChamp} />
                <VSContainer color={vsColor} />
                <ChampCard coverResult={coverResult} data={rightCardChamp} handleHigherClick={handleHigherClick} handleLowerClick={handleLowerClick} />
            </CardContainer>
        </GameBoard>
    )
}