import React from "react";
import { Card } from 'semantic-ui-react';

export default function ChallengeCard( props ) {
  const { data } = props; 

  return (
    
        <Card>
      <Card.Content>
        <Card.Header>{data.verb}</Card.Header>
        <Card.Meta>
          <span className='dimension'>{data.sentence}</span>
          <br></br>
          <span className='dimension'>{data.form}</span>

        </Card.Meta>
 
      </Card.Content>
      {/* <Card.Content extra>
        <a>
          <Icon name='user' />
          Episodes : {episode.count.length}
        </a>
      </Card.Content> */}
    </Card>
  
    
  );
  }


