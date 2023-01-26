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
    width: 700px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChampBoard = (props) => {
    const { gameState, championData } = props;
    const [leftCardChamp, setLeftCardChamp] = useState([]);
    const [rightCardChamp, setRightCardChamp] = useState([]);
    const [higherLower, setHigherLower] = useState(false);
    const [currentScore, setCurrentScore] = useState(0);

    let userChoice;
    const checkUserChoice = (choice) => {
        console.log("Score: " + currentScore);
        console.log("User Choice: " + choice, "HigherLower: " + higherLower)
        if (choice === higherLower) {
            setCurrentScore(currentScore + 1);
            const newChamp = getRandomChamp(championData);
            setLeftCardChamp(rightCardChamp);
            setRightCardChamp(newChamp);
            setHigherLower(parseInt(newChamp.matchesPlayed, 10) >= parseInt(rightCardChamp.matchesPlayed, 10))
        } else {
            props.endGame(currentScore);
        }
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
                <ChampCard position="left" data={leftCardChamp} />
                <ChampCard position="right" data={rightCardChamp} handleHigherClick={handleHigherClick} handleLowerClick={handleLowerClick} />
            </CardContainer>
        </GameBoard>
    )
}