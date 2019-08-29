import React, { useState, useEffect } from "react";
import axios from "axios";

const Challenge = props => {
  const [challenge, setChallenge] = useState({});

  useEffect(() => {
    //   const id = props.match.params.id;
    axios
      .get(`https://sp-conjugator-be.herokuapp.com/api/verbs`)
      .then(response => {
        console.log(response);
        setChallenge(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (!challenge) {
    return <div>Loading information...</div>;
  }
  //   const { verb, conjugation, tense, form, sentence } = challenge;
  return (
    <div>
      <input
        type="text"
        name="conjugation"
        placeholder="Type conjugation here"
      />
      <button type="submit">Submit!</button>
    </div>
  );
};

export default Challenge;
