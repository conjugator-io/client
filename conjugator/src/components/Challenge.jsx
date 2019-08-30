import React, { useState, useEffect } from "react";
import axios from "axios";
import alligator_3312851_960_720 from "../images/alligator_3312851_960_720.svg";
// import CardChallenge from './CardChallenge';
import styled from "styled-components";
import Logo from "./Logo";

const Styler = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #0a4699;
`;

const StylerP = styled.p`
  height: 198px;
  width: 750px;
  color: #ffe981;
  font-family: Nunito;
  font-size: 48px;
  line-height: NaNpx;
`;

const StylerB = styled.button`
  height: 45px;
  width: 120px;
  border-radius: 6px;
  background-color: #fce781;

  color: #0a4699;
  font-family: Nunito;
  font-size: 18px;
  line-height: 24px;
`;

const StylerC = styled.a`
  text-decoration: none;
`;

const MiddleDiv = styled.div`
  // display: flex;
  // justify-content: center;
  // flex-direction: column;
  // align-items: center;
  text-align: -webkit-center;
`;

const Input = styled.input`
  height: 40px;
  width: 360px;
  border-radius: 6px;
  background-color: #ffffff;
`;
const Challenge = props => {
  const [challenge, setChallenge] = useState([]);
  const [data, setData] = useState();
  const [sentence, setSentence] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(0);
  const [error, setError] = useState("");
  const [verb, setVerb] = useState(""); 

  useEffect(() => {
    if (!data) {
      axios

        .get(`https://sp-conjugator-be.herokuapp.com/api/verbs`)
        .then(response => {
          console.log(response.data);
          setChallenge(response.data[0].sentence);
          setData(response.data);
          setSentence(response.data[0].sentence);
          setVerb(response.data[0].verb); 
        })
        .catch(error => {
          console.error(error);
        });
    }

    if (data) {
      setSentence(data[counter].sentence);
      setVerb(data[counter].verb); 
    }
  }, [counter]);
  const clickButton = e => {
    e.preventDefault();
    if (data[counter].conjugation == inputValue) {
      console.log("matches");
      setCounter(counter + 1);
      setError("");
    } else {
      console.log("wrong");
      //put errors here
      setError("Hint: Verb must be in " + data[counter].tense + " tense");
    }
  };

  const changeHandler = e => {
    // console.log(e.target.value);
    setInputValue(e.target.value);
  };
  if (!sentence) {
    return null;
  }
  return (
    <Styler>
      {" "}
      <Logo />
      <MiddleDiv>
        <StylerP>
          <p>{sentence}<br></br>Verb: {verb}</p> 
          
        </StylerP>
        <br></br>
        <br></br>
        <Input
          type="text"
          name="conjugation"
          placeholder="Type conjugation here"
          onChange={changeHandler}
          value={inputValue}
        />
        <StylerB onClick={clickButton}>
          <StylerC>Submit!</StylerC>{" "}
        </StylerB>
        <p>{error ? error : null}</p>
      </MiddleDiv>
    </Styler>
  );
};

export default Challenge;
