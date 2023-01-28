import React, { useState, useEffect, useMemo, useRef } from "react";
import styled from "styled-components";
import { getChampionData } from "./api/api";
import summonersRift from "./images/summoners_rift.png";
import summonersRiftGray from "./images/summoners_rift_bw.png";
import { ChampBoard } from "./components/ChampBoard";
import { StartScreen } from "./components/StartScreen";
import { GameOver } from "./components/GameOver";
import { sampleChampionData } from "./util/sampleChampionData";

const MainContainer = styled.div`
    width: 800px;
    height: 750px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const PageContainer = styled.div`
    display: flex;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`

const TextContainer = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: ${props => props.fontSize};
    color: white;
`

export const App = () => {
    const [display, setDisplay] = useState()
    const [championData, setChampionData] = useState([]);
    const [bgImg, setBgImg] = useState(summonersRift);
    const bgImgRef = useRef(null);
    const imgRef = useRef(new Image());

    const startGame = () => {
        console.log("Starting game...")
        setBgImg(summonersRift);
        setDisplay((<div>
            <ChampBoard 
                championData={championData}
                endGame={endGame}
                />
        </div>))
    }

    const endGame = (currentScore) => {
        imgRef.current.src = summonersRiftGray;
        imgRef.current.onload = () => {
          setBgImg(summonersRiftGray);
        }
        setDisplay(<GameOver score={currentScore} start={startGame} />)
    }

    useEffect(() => {
        bgImgRef.current.style.backgroundImage = `url(${bgImg})`
    }, [bgImg])

    useEffect(() => {
        console.log("Initializing...")
        setDisplay(<StartScreen start={startGame} message="START"/>)
        // eslint-disable-next-line
    }, [championData]);

    useMemo(() => {
        const callBackendApi = async () => {
            console.log("Retrieving champion data...")
            const response = await getChampionData();
            if (response.status === 200) {
                setChampionData(response.data);
            } else {
                console.log("Unable to retrieve champion data from backend, using sample data")
                setChampionData(sampleChampionData);
            }
        };

        callBackendApi();
        setBgImg(summonersRift);
    }, [])
    
    return (
        <PageContainer ref={bgImgRef}>
            <TextContainer fontSize="70px">HIGHER LOWER</TextContainer>
            <TextContainer fontSize="30px">League of Legends Champion Edition</TextContainer>
            <MainContainer>
                {display}
            </MainContainer>
        </PageContainer>
    );
};
