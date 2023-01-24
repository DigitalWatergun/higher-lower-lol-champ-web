import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { getChampionData } from "./api/api";
import { ChampCard } from "./components/ChampCard";

const CardContainer = styled.div`
    background-color: white;
    width: 700px;
    height: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
`

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
    const [championData, setChampionData] = useState([]);

    useEffect(() => {
        console.log(process.env.REACT_APP_API_URL);
        const callBackendApi = async () => {
            const response = await getChampionData();
            if (response.status === 200) {
                setChampionData(response.data);
            } else {
                console.log(response);
            }
        };

        callBackendApi();
    }, []);
    
    return (
        <PageContainer>
            <MainContainer>
                <h1>Higher Lower LoL Champ Edition</h1>
                <CardContainer>
                    <ChampCard position="left"/>
                    <ChampCard position="right"/>
                </CardContainer>
            </MainContainer>
        </PageContainer>

    );
};
