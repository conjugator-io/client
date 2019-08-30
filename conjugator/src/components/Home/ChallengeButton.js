import React from "react";
import styled from 'styled-components';
import { Link } from 'react-router-dom'

//Styled Components

const Btn = styled.button`
    display:flex;
    height: 40px;
    width: 322px;
    border: 1px solid #979797;
    border-radius: 6px;
    background-color: #FCE781;
    justify-content: center;
    margin:auto;
    margin-top:36px;
    `;

export default function ChallengeButton(props){

    const user = props.user;
    console.log(user);

    const progress = user.daily_progress;
    let text = 'Continue';

    if(progress == 0){
        text = "Start Today's Challenge"
    }

    return(
        <Link to='/challenge'>
            <Btn>{text}</Btn>
        </Link>
    )
}