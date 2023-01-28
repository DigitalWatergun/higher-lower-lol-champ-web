import React from "react";
import styled from "styled-components";
import { formatMatchesPlayed, formatChampNames } from "../util/textFormatter";

const ChampCardContainer = styled.div`
    width: 300px;
    height: 600px;
    margin: 25px;
    display: flex;
    background: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const ChampCardInfoContainer = styled.div`
    width: 300px;
    height: 150px;
    display: flex;
    align-self: flex-end;
    justify-content: center;
    background: linear-gradient(transparent 0%, black 100%);
`

const ChampCardInfo = styled.div`
    margin-bottom: 20px;
    color: white;
    display: flex;
    align-self: flex-end;
    text-align: center;
    flex-direction: column;
`

const TextContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.fontSize};
    padding-top: 20px;
`

const ButtonContainer = styled.div`
    padding-top: 20px;
`

const Button = styled.button`
    width: 125px;
    height: 47px;
    background: transparent;
    border: 1px solid white;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
    color: white;
    font-size: 20px;
    margin: 0 10px;
    padding-left: 10px;

    &{Button}:hover {
        background-color: white;
        color: black;
    }
`

export const ChampCard = (props) => { 
    const { coverResult, data, handleHigherClick, handleLowerClick } = props

    return (
        <ChampCardContainer bgImg={data.loadingScreenUrl}>
            <ChampCardInfoContainer>
                <ChampCardInfo>
                    <TextContainer fontSize="30px">{formatChampNames(data.championName)}</TextContainer>
                    { coverResult ? <ButtonContainer>
                        <Button onClick={handleHigherClick}>Higher ▲</Button>
                        <Button onClick={handleLowerClick}>Lower ▼</Button>
                    </ButtonContainer>: <TextContainer fontSize="40px">{formatMatchesPlayed(data.matchesPlayed)}</TextContainer>}
                    <TextContainer fontSize="15px">MATCHES PLAYED</TextContainer>
                </ChampCardInfo>
            </ChampCardInfoContainer>
        </ChampCardContainer>
    )
};
