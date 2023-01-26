import React from "react";
import styled from "styled-components";

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

export const ChampCard = (props) => { 
    const { coverResult, data, handleHigherClick, handleLowerClick } = props

    return (
        <ChampCardContainer bgImg={data.loadingScreenUrl}>
            <ChampCardInfoContainer>
                <ChampCardInfo>
                    <p>{JSON.stringify(props.data.championName)}</p>
                    <p>has</p>
                    { coverResult ? <div>
                        <button onClick={handleHigherClick}>Higher</button>
                        <button onClick={handleLowerClick}>Lower</button>
                    </div>: <p>{JSON.stringify(data.matchesPlayed)}</p>}
                    <p>matches played.</p>
                </ChampCardInfo>
            </ChampCardInfoContainer>
        </ChampCardContainer>
    )
};
