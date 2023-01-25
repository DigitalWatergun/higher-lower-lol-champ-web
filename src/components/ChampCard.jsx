import React, { useState } from "react";
import styled from "styled-components";

const ChampCardContainer = styled.div`
    width: 300px;
    height: 600px;
    margin: 25px;
    background-color: ${props => props.position === "left" ? "red" : "blue"};
    display: flex;
    background: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const ChampCardInfo = styled.div`
    width: 300px;
    height: 75px;
    background-color: transparent;
    align-self: flex-end;
    text-align: center;
    color: white;
    background: ${props => props.bgImg}
`

export const ChampCard = (props) => { 
    const { position, data, handleHigherClick, handleLowerClick } = props

    return (
        <ChampCardContainer position={position} bgImg={data.loadingScreenUrl}>
            <ChampCardInfo>
                <p>{JSON.stringify(props.data.championName)}</p>
                <p>has</p>
                {props.position === "right" ? <div>
                    <button onClick={handleHigherClick}>Higher</button>
                    <button onClick={handleLowerClick}>Lower</button>
                </div>: <p>{JSON.stringify(props.data.matchesPlayed)}</p>}
                <p>matches played.</p>
            </ChampCardInfo>
        </ChampCardContainer>
    )
};
