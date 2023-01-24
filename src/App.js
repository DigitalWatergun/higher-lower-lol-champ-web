import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getChampionData } from "./api/api";
import { ChampBoard } from "./components/ChampBoard";
import { StartButton } from "./components/StartButton";

const MainContainer = styled.div`
    background-color: gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PageContainer = styled.div`
    display: flex;
    background-color: black;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const App = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [championData, setChampionData] = useState([]);

    const handleIsPlaying = () => {
        setIsPlaying(!isPlaying)
    };

    useEffect(() => {
        const callBackendApi = async () => {
            const response = await getChampionData();
            if (response.status === 200) {
                setChampionData(response.data);
            } else {
                console.log(response);
            }
        };

        callBackendApi();
        console.log(process.env.REACT_APP_API_URL);
    }, []);
    
    return (
        <PageContainer>
            <MainContainer>
                <h1>Higher Lower LoL Champ Edition</h1>
                {
                    isPlaying ? (<div>
                        <ChampBoard gameState={isPlaying} setGameState={handleIsPlaying} championData={ championData } />
                        <button onClick={handleIsPlaying}>End</button>
                    </div>)
                        : <StartButton setIsPlaying={handleIsPlaying} />
                }
            </MainContainer>
        </PageContainer>

    );
};
