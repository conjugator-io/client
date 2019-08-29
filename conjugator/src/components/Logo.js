import React from 'react';
import styled from 'styled-components';
import logo from './logo.svg'


const Title = styled.h1`
height: 30px;
width: 179px;
color: #F7E486;
font-family: "Montserrat Alternates";
font-size: 25px;
font-weight: bold !important;
line-height: 30px;
    `;

const Image = styled.img`
    height: 57px;
    width: 115px;
    padding:7px;
    `;

const Div = styled.div`
    display:flex;
    align-items:center;
    `;
    
export default function Logo(){

    return(
        <Div>
            <Title>
            Conjugator.io
            </Title>
            <Image src={logo} className="pic" alt="logo" />
        </Div>
    )
}