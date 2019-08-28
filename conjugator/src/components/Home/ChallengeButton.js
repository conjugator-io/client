import React, { useState, useEffect} from "react";
import axios from 'axios';
import styled from 'styled-components';

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

    const [progress, setProgress] = useState(2);
    let text = 'Continue';

    useEffect(() => {

        const getProgress = () => {
        axios
            // .get(`https://sp-conjugator-be.herokuapp.com/api/${id}`)
            .get(`https://sp-conjugator-be.herokuapp.com/api/1`)
            .then(response => {
            console.log(response.data)
            setProgress(response.data.daily_progress);
            })
            .catch(error => {
            console.error('Server Error', error);
            });
        }
        
        getProgress();
    }, []);

    if(progress == 0){
        text = "Start Today's Challenge"
    }

    return(
        <Btn>{text}</Btn>
    )
}