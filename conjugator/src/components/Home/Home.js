import React, { useState, useEffect } from "react";
import styled from 'styled-components';

import { axiosWithAuth } from '../../utils/axiosWithAuth';

import Nav from './Nav';
import ProgressBar from './ProgressBar';
import ChallengeButton from './ChallengeButton';
import Streak from './Streak';
import GoalCircle from './GoalCircle';
import wave from './images/wave.svg';
import waves from './images/waves.svg'


//Styled 
const Dash = styled.div`
    background-color:#0A4699;
//     margin:auto;
    width:100%;
    `;

const Welcome = styled.h2`
    height: 34px;
    max-width: 607px;
    width:100%;
    color: #FCE781;
    font-family: Nunito;
    font-size: 25px;
    line-height: 34px;
    margin:auto;
    margin-top:113px;
    `;

const MidBorder = styled.span`
    display:flex;
    height:35px;
    max-width:502px;
    width:100%;
    border-bottom: 1px solid #FCE781;
    margin:auto;
    `;

const MidText = styled.p`
    max-width:fit-content;
    width:100%
    color: #FCE781;
    font-family: Nunito;
    font-size: 14px;
    line-height: 19px;
    margin-top:18px;
    margin-bottom:0;
    margin-left: auto;
    margin-right: auto;
    `;

const Image1 = styled.img`
    opacity: .75;
    position:relative;
    height:190px;
    max-width:1024px;
    width:100%;
    `;

const Image2 = styled.img`
    position:relative;
    bottom:100px;
    max-width:1024px;
    width:100%;
    `;


export default function Home(props) {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axiosWithAuth()

            .get(`https://sp-conjugator-be.herokuapp.com/api/users/3`)
            .then(response => {
                console.log(response.data)
                setUser(response.data)
            })
            .catch(error => {
                console.error('Server Error', error);
            });
    }, []);


    return (
        <Dash>
            <Nav />
            <Welcome>You're on a {user.streak_days} day streak! Keep up the good work {user.name}!</Welcome>
            <ProgressBar user={user} />
            <ChallengeButton user={user} />
            <Streak user={user} />
            <MidBorder />
            <MidText>This Week's Goal</MidText>
            <GoalCircle user={user} />
            <img src={waves} />
        </Dash>
    )
}