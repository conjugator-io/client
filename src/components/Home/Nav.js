import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import Logo from '../Logo';
//Icon Imports
import dictionary from './images/dictionary.png';
import chat from './images/chat.png';
import goalsY from './images/goalsY.png';
import user from './images/user.svg';

//Styled Component

{ /* 
    //Unrendered styled components

    const NavBar = styled.div`
    display:flex;
    justify-content: space-between;
    border-bottom: 2px solid #979797;
    height:78px;
    align-items:center;
    `;

    const leftNav = styled.div`
    display:flex;
    justify-content: space-between;
    margin-right:34px;
    background-color:red;
    `;

const navItem = styled.div`
    text-align:center;
    `;

const navText = styled.h2`
    height: 19px;
    width: 65px;
    color: #FCE781;
    font-family: Nunito;
    font-size: 14px;
    line-height: 19px;
    `;

const navIcon = styled.img`
    height: 40px;
    width: 40px;
    `;

const userIcon = styled.img`
    height: 50px;
    width: 50px;
`; */}

export default function Nav(){

//Unrendered Return - JSX styled html
{/* <leftNav>
                <navItem>
                    <navText>Dictionary</navText>
                    <navIcon src={dictionary} className="navIcon" alt="Dictionary Icon"/>
                </navItem>
                <navItem>
                    <navText>Chat</navText>
                    <navIcon src={chat} className="navIcon" alt="Chat Icon"/>
                </navItem>
                <navItem>
                    <navText></navText>
                    <navIcon src={goalsY} className="navIcon" alt="Daily Goals Icon"/>
                </navItem>
                <userIcon src={user} className="navIcon" alt="User Icon" />
            </leftNav> */}

    return(
        <div className='NavBar'>
            <Logo/>
            <div className='leftNav'>
                <div className='navItem'>
                    <img className='navIcon' src={dictionary} alt="Dictionary Icon"/>
                    <h2 className='navText'>Dictionary</h2>
                </div>
                <div className='navItem'>
                    <img className='navIcon' src={chat} alt="Chat Icon"/>
                    <h2 className='navText'>Chat</h2>
                </div>
                <div className='navItem'>
                    <img className='navIcon' src={goalsY} alt="Daily Goals Icon"/>
                    <h2 className='navText'>Daily Goal</h2>
                </div>
                <img className='userIcon' src={user} alt="User Icon" />
            </div>
        </div>
    )

}