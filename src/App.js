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
    const [gameState, setGameState] = useState("start");
    const [display, setDisplay] = useState()
    const [isPlaying, setIsPlaying] = useState(false);
    const [championData, setChampionData] = useState([]);
    const [score, setScore] = useState(0);

    const handleIsPlaying = () => {
        setIsPlaying(!isPlaying)
    };

    const startGame = () => {
        console.log("Starting game...")
        setGameState("play");
        setDisplay((<div>
            <ChampBoard gameState={gameState}
                setGameState={handleIsPlaying}
                championData={championData}
                score={score}
                setScore={setScore}
                setIsPlaying={handleIsPlaying} 
                endGame={endGame}
                />
            <button onClick={endGame}>End</button>
        </div>))
    }

    const endGame = (currentScore) => {
        setGameState("end");
        setDisplay(<div>Game Over. Score: {currentScore}</div>)
    }

    useEffect(() => {
        // const callBackendApi = async () => {
        //     const response = await getChampionData();
        //     if (response.status === 200) {
        //         setChampionData(response.data);
        //     } else {
        //         console.log(response);
        //     }
        // };

        // callBackendApi();
        setChampionData([
            {
                "championName": "Jhin",
                "matchesPlayed": "366658",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jhin_0.jpg"
            },
            {
                "championName": "Jinx",
                "matchesPlayed": "129591",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Jinx_0.jpg"
            },
            {
                "championName": "Kaisa",
                "matchesPlayed": "456172",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Kaisa_0.jpg"
            },
            {
                "championName": "Shen",
                "matchesPlayed": "102499",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shen_0.jpg"
            },
            {
                "championName": "Skarner",
                "matchesPlayed": "11084",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Skarner_0.jpg"
            },
            {
                "championName": "Sona",
                "matchesPlayed": "80407",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sona_0.jpg"
            },
            {
                "championName": "Soraka",
                "matchesPlayed": "112750",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Soraka_0.jpg"
            },
            {
                "championName": "Swain",
                "matchesPlayed": "60973",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Swain_0.jpg"
            },
            {
                "championName": "Sylas",
                "matchesPlayed": "203221",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sylas_0.jpg"
            },
            {
                "championName": "Syndra",
                "matchesPlayed": "131482",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Syndra_0.jpg"
            },
            {
                "championName": "TahmKench",
                "matchesPlayed": "30656",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/TahmKench_0.jpg"
            },
            {
                "championName": "Aatrox",
                "matchesPlayed": "135279",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg"
            },
            {
                "championName": "Ahri",
                "matchesPlayed": "102985",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ahri_0.jpg"
            },
            {
                "championName": "Akali",
                "matchesPlayed": "141639",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akali_0.jpg"
            },
            {
                "championName": "Akshan",
                "matchesPlayed": "57881",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Akshan_0.jpg"
            },
            {
                "championName": "Alistar",
                "matchesPlayed": "56711",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Alistar_0.jpg"
            },
            {
                "championName": "Amumu",
                "matchesPlayed": "80597",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Amumu_0.jpg"
            },
            {
                "championName": "Anivia",
                "matchesPlayed": "86622",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg"
            },
            {
                "championName": "Annie",
                "matchesPlayed": "20168",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Annie_0.jpg"
            },
            {
                "championName": "Aphelios",
                "matchesPlayed": "55957",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aphelios_0.jpg"
            },
            {
                "championName": "Ashe",
                "matchesPlayed": "108179",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ashe_0.jpg"
            },
            {
                "championName": "AurelionSol",
                "matchesPlayed": "10152",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/AurelionSol_0.jpg"
            },
            {
                "championName": "Azir",
                "matchesPlayed": "39063",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg"
            },
            {
                "championName": "Bard",
                "matchesPlayed": "78522",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Bard_0.jpg"
            },
            {
                "championName": "Belveth",
                "matchesPlayed": "66659",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Belveth_0.jpg"
            },
            {
                "championName": "Blitzcrank",
                "matchesPlayed": "166138",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Blitzcrank_0.jpg"
            },
            {
                "championName": "Brand",
                "matchesPlayed": "50415",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Brand_0.jpg"
            },
            {
                "championName": "Braum",
                "matchesPlayed": "30205",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Braum_0.jpg"
            },
            {
                "championName": "Caitlyn",
                "matchesPlayed": "405949",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Caitlyn_0.jpg"
            },
            {
                "championName": "Camille",
                "matchesPlayed": "144283",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Camille_0.jpg"
            },
            {
                "championName": "Cassiopeia",
                "matchesPlayed": "61988",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Cassiopeia_0.jpg"
            },
            {
                "championName": "Chogath",
                "matchesPlayed": "28033",
                "loadingScreenUrl": "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Chogath_0.jpg"
            },
        ])
        console.log(process.env.REACT_APP_API_URL);
    }, []);
    
    return (
        <PageContainer>
            <MainContainer>
                <h1>Higher Lower LoL Champ Edition</h1>
                {gameState === "start" ? <StartButton start={startGame} /> : <div>{display}</div>}
            </MainContainer>
        </PageContainer>

    );
};
