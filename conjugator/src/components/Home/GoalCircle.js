import React, { useState, useEffect} from "react";
import axios from 'axios';

export default function GoalCircle(props){

    const [goal, setGoal] = useState(3);
    const [progress, setProgress] = useState(1);
    const [streak, setStreak] = useState(9);

    // const id =  props.match.params.id;


    //Effect Hooks
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

    useEffect(() => {

        const getStreak = () => {
        axios
            // .get(`https://sp-conjugator-be.herokuapp.com/api/${id}`)
            .get(`https://sp-conjugator-be.herokuapp.com/api/1`)
            .then(response => {
            console.log(response.data)
            setStreak(response.data.streak_days);
            })
            .catch(error => {
            console.error('Server Error', error);
            });
        }
        
        getStreak();
    }, []);


    //Variables
    if(progress > goal){
        progress = goal;
    };
    const weekly = goal * 7;
    const weekStreak = streak % 7;
    const done = weekStreak * goal + progress;

    const rawDec = done/weekly;
    const percent = Math.round(rawDec *100);
    const percentile = Math.round(rawDec*10) * 10;

    const string1 = 'GoalCircle';
    const string2 = percentile.toString();
    const string3 = string1.concat(string2);

    console.log(`goal:${goal},
                progress:${progress},
                streak:${streak},
                weekly:${weekly},
                weekStreak:${weekStreak},
                done:${done},
                rawDec:${rawDec},
                percent:${percent},
                percentile:${percentile}`);

    return(
        <span className={string3}>
            {percent}% of goal
        </span>
    )
}