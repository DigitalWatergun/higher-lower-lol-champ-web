import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 82px;
    height: 82px;
    padding: 15px;
    color: white;
    background-color: transparent;
    border-radius: 50%;
    border: 2px solid white;
    text-align: center;
    justify-content: center;
    text-decoration: none;

    &{Button}:hover {
        background-color: white;
        color: black;
    }
`

export const PlayButton = (props) => {
    const { start, message } = props;

    return (
        <Button onClick={start}>{message}</Button>
    )
}