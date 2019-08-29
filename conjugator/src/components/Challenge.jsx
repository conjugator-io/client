import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import CardChallenge from './CardChallenge';
import styled from 'styled-components';

const Styler = styled.div`
height: 750px;	
width: 1024px;	
background-color: #0A4699;
`;

const StylerP = styled.p`
height: 198px;	
width: 750px;	
color: #FFE981;	
font-family: Nunito;	
font-size: 48px;	
line-height: NaNpx;
`;

const StylerB = styled.button`
height: 45px;	
width: 120px;	
border-radius: 6px;	
background-color: #FCE781;
 
    	
    color: #0A4699;	
    font-family: Nunito;
        font-size: 18px;
        	line-height: 24px;
`;

const StylerC = styled.a`
text-decoration: none;
`;

const Challenge = (props) => {
    const [challenge, setChallenge] = useState([]);
    const [data, setData] = useState();
    const [sentence, setSentence] = useState('');
    const [inputValue, setInputValue] = useState("");
    const [counter, setCounter] = useState(0);
    const [error, setError] = useState('');

    useEffect(() => {
      

      if(!data){
        axios
         
        .get(`https://sp-conjugator-be.herokuapp.com/api/verbs`)
        .then(response => {
            console.log(response.data)
          setChallenge(response.data[0].sentence);
          setData(response.data);
          setSentence(response.data[0].sentence);
        })
        .catch(error => {
          console.error(error);
        });
      }
         
      if(data){
        setSentence(data[counter].sentence);
      }
          
  
    },[counter]);
    const clickButton = (e) =>{
      e.preventDefault();
      if(data[counter].conjugation == inputValue){
        console.log('matches');
        setCounter(counter + 1);
        setError("");
        
      } else{
        console.log('wrong')
        //put errors here
        setError("Hint: Verb must be in " + data[counter].tense + " tense");
      }
    }

    const changeHandler = e =>{
      // console.log(e.target.value);
      setInputValue(e.target.value);
    }
if(!sentence){ return null; }
    return (
        
 <Styler> <div className="App">
          <nav>
          <h1>Conjugator</h1>
          </nav>
          

       <StylerP> 
        <p>
         {sentence}
        </p>
        
        </StylerP>      
    <input type="text" name="conjugation" placeholder="Type conjugation here" onChange={changeHandler} value={inputValue} />
<StylerB onClick={clickButton}><StylerC>Submit!</StylerC> </StylerB> 
<p>{(error) ? error : null}</p>
        </div>
        </Styler>
      );
    }
  







      
    
      
    



    







export default Challenge; 