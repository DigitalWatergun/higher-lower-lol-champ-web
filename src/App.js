import React, { useState, useEffect } from "react";
import { getChampionData } from "./api/api";

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
        <div>
            <h1>Higher Lower LoL Champ Edition</h1>
            <p>{JSON.stringify(championData)}</p>
        </div>
    );
};
