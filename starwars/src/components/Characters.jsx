import React from 'react';
import { Card } from 'semantic-ui-react';

const Characters = props => <Card header={props.character.name} description={props.character.birth_year} meta={props.character.gender} />
  



export default Characters;