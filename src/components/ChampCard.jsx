import React from "react";
import styled from "styled-components";

const ChampCardContainer = styled.div`
    width: 300px;
    height: 600px;
    margin: 25px;
    background-color: ${props => props.position === "left" ? "red" : "blue"};
`

export const ChampCard = (props) => { 

    return (
        <ChampCardContainer position={props.position}>
            <p>{ JSON.stringify(props.data) }</p>
        </ChampCardContainer>
    )
};