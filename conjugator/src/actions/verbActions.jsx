import { FETCH_VERBS } from './types';

export const fetchQuestions = () => dispatch => {
    fetch('https://sp-conjugator-be.herokuapp.com/api/verbs')
    .then(res => res.json())
    .then(questions => 
        dispatch({
            type: FETCH_VERBS,
            payload: questions
        })
    );
};