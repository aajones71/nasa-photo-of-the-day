import React from "react";
// import { start } from "repl";
import styled from "styled-components";

const Pulse = styled.div`
    background-color: green;
    color: blue;
   
`;

 const PicsCard = props => {
    return (
        <Pulse className= "astroPics" key = {props.id}>
            <h1>Photo Of The Day</h1>
            <h2>Title: {props.title}</h2>
            <p>Date:{props.date}</p>
            <img src= {props.img} alt="NASA"/>
            <p>Explanation: {props.explanation}</p>
            
        </Pulse>
    );
};
export default PicsCard;