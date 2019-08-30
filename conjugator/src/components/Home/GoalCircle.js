import React from "react";

export default function GoalCircle(props){

    const user = props.user;
    console.log(user);

    const goal = user.daily_goal;
    const progress = user.daily_progress;
    const streak = user.streak_days;


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