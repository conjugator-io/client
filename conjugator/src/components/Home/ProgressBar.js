import React, { useState, useEffect} from "react";
import axios from 'axios';

export default function ProgressBar(props){

    const [goal, setGoal] = useState(3);
    const [progress, setProgress] = useState(2);
    // const id =  props.match.params.id;
    
    useEffect(() => {

        const getGoal = () => {
        axios
            // .get(`https://sp-conjugator-be.herokuapp.com/api/${id}`)
            .get(`https://sp-conjugator-be.herokuapp.com/api/1`)
            .then(response => {
            console.log(response.data)
            setGoal(response.data.daily_goal);
            })
            .catch(error => {
            console.error('Server Error', error);
            });
        }
        
        getGoal();
    }, []);

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

    //Bar Class Name Strings - bar[goal][progress]

    const string0 = 'bar';
    const string1 = goal.toString();
    const string2 = progress.toString();

    const bar = string0.concat(string1).concat(string2);
    console.log(bar);


    return(
        <div className ='Prog'>
            <h2 className='progText'>Challenge Progress</h2>
            <span className={bar}/>
        </div>
    )
}