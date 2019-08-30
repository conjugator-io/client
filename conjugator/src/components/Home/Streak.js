import React from "react";
import styled from 'styled-components';


//Styled Components

const Div = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    height: 71px;
    width: 466px;
    margin:auto;
    margin-top:35px;
    `;

const Day = styled.div`
    align-items:center;
    `;

const Text = styled.h2`
    height: 28px;
    width: 46px;
    color: #FCE781;
    font-family: Nunito;
    font-size: 21px;
    line-height: 28px;
    margin:0;
    `;


export default function Streak(props) {

    const user = props.user;
    // console.log(user);

    const streak = user.streak_days;

    //Week
    const date = new Date();
    const today = date.getDay();
    let weekstreak = streak;
    if (streak > today) {
        weekstreak = today;
    }
    var difference = today - 1 - weekstreak;

    if (difference < 0) {
        difference = -1;
    }
    const week = [
        { name: 'Sun', circle: 'Circle1' },
        { name: 'Mon', circle: 'Circle1' },
        { name: 'Tue', circle: 'Circle1' },
        { name: 'Wed', circle: 'Circle1' },
        { name: 'Thu', circle: 'Circle1' },
        { name: 'Fri', circle: 'Circle1' },
        { name: 'Sat', circle: 'Circle1' }
    ]

    for (let i = today - 1; i > difference; i--) {

        week[i].circle = 'Circle2';
    }

    week[today].circle = 'Circle3';

    return (
        <Div>
            {week.map(day => (
                <Day>
                    <span className={day.circle} />
                    <Text>{day.name}</Text>
                </Day>
            ))}
        </Div>
    )
}