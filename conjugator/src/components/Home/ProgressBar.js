import React from "react";

export default function ProgressBar(props){
    
    const user = props.user;
    console.log(user);

    const goal = user.daily_goal;
    const progress = user.daily_progress;

    //Bar Class Name Strings: bar[goal][progress]

    const string = 'bar';
    const bar = string.concat(goal).concat(progress);
    console.log(bar);


    return(
        <div className ='Prog'>
            <h2 className='progText'>Challenge Progress</h2>
            <span className={bar}/>
        </div>
    )
}