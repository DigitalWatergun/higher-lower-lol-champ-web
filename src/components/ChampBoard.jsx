import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ChampCard } from "./ChampCard";

import { getRandomChamp } from "../util/getRandomChamp";

const CardContainer = styled.div`
    background-color: white;
    width: 700px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ChampBoard = (props) => {
    const [championData] = useState(props.championData); //["champ1", "champ2", "champ3", "champ4"]
    const [gameState, setGameState] = useState(props.gameState)
    const [leftCardChamp, setLeftCardChamp] = useState([]);
    const [rightCardChamp, setRightCardChamp] = useState([]);

    useEffect(() => {
        console.log(gameState)
    },[]);

    useEffect(() => {
        setLeftCardChamp(getRandomChamp(championData));
        setRightCardChamp(getRandomChamp(championData));
    }, [gameState]);

    return (
        <CardContainer>
            <ChampCard position="left" data={ leftCardChamp } />
            <ChampCard position="right" data={ rightCardChamp} />
        </CardContainer>
    )
}