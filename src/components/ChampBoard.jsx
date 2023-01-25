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
    // const [championData] = useState(props.championData); 
    const [gameState, setGameState] = useState(props.gameState)
    const [leftCardChamp, setLeftCardChamp] = useState([]);
    const [rightCardChamp, setRightCardChamp] = useState([]);
    const [higherLower, setHigherLower] = useState(false);
    let { score, handleScore } = props

    let userChoice;
    const checkUserChoice = (choice) => {
        console.log("Score: " + score);
        console.log("User Choice: " + choice, "HigherLower: " + higherLower)
        if (choice === higherLower) {
            score = score + 1
            handleScore(score);
            const newChamp = getRandomChamp(props.championData);
            setLeftCardChamp(rightCardChamp);
            setRightCardChamp(newChamp);
            setHigherLower(parseInt(newChamp.matchesPlayed, 10) >= parseInt(rightCardChamp.matchesPlayed, 10))
        } else {
            setGameState(false)
            props.setIsPlaying();
            handleScore(0);
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
        const leftChamp = getRandomChamp(props.championData);
        const rightChamp = getRandomChamp(props.championData);
        const higherLower = parseInt(rightChamp.matchesPlayed, 10) >= parseInt(leftChamp.matchesPlayed, 10)

        setLeftCardChamp(leftChamp);
        setRightCardChamp(rightChamp);
        setHigherLower(higherLower);
    }, []);

    return (
        <GameBoard>
            <ScoreDisplay>Score: {score}</ScoreDisplay>
            <CardContainer>
                <ChampCard position="left" data={ leftCardChamp } />
                <ChampCard position="right" data={rightCardChamp} handleHigherClick={handleHigherClick} handleLowerClick={handleLowerClick} />
            </CardContainer>
        </GameBoard>
    )
}