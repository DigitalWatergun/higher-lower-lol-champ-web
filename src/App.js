import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getChampionData } from "./api/api";
import summonersRift from "./images/summoners_rift.png";
import summonersRiftGray from "./images/summoners_rift_bw.png";
import { ChampBoard } from "./components/ChampBoard";
import { StartButton } from "./components/StartButton";
import { GameOver } from "./components/GameOver";
import { sampleChampionData } from "./util/sampleChampionData";

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
    background: url(${props => props.bgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

export const App = () => {
    const [display, setDisplay] = useState()
    const [isPlaying, setIsPlaying] = useState(false);
    const [championData, setChampionData] = useState([]);
    const [score, setScore] = useState(0);
    const [bgImg, setBgImg] = useState(summonersRiftGray);

    const handleIsPlaying = () => {
        setIsPlaying(!isPlaying)
    };

    const startGame = () => {
        console.log("Starting game...")
        setBgImg(summonersRift);
        setDisplay((<div>
            <ChampBoard 
                setGameState={handleIsPlaying}
                championData={championData}
                score={score}
                setScore={setScore}
                setIsPlaying={handleIsPlaying} 
                endGame={endGame}
                />
        </div>))
    }

    const endGame = (currentScore) => {
        setBgImg(summonersRiftGray);
        setDisplay(<GameOver score={currentScore} start={startGame} />)
    }

    useEffect(() => {
        console.log("Initializing...")
        setBgImg(summonersRift);
        setDisplay(<StartButton start={startGame} message="START"/>)
        // const callBackendApi = async () => {
        //     console.log("Retrieving champion data...")
        //     const response = await getChampionData();
        //     if (response.status === 200) {
        //         setChampionData(response.data);
        //     } else {
        //         console.log(response);
        //     }
        // };

        // callBackendApi();
        setChampionData(sampleChampionData);
        // eslint-disable-next-line
    }, [championData]);
    
    return (
        <PageContainer bgImg={bgImg}>
            <MainContainer>
                <h1>Higher Lower LoL Champ Edition</h1>
                {display}
            </MainContainer>
        </PageContainer>
    );
};
