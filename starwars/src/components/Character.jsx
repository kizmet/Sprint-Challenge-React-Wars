import React, { Component } from 'react';
//is a component that takes in the `todo` data and displays the task to the screen.
import CharacterList from './CharacterList'; 

const Character = (props) => {
  
        const characters=props.characters;
        const CharacterList = characters.map((character) =>
            <CharacterList key={character.created.toString()}
              value={character.name}
              status={character.homeworld.toString()} />
        );
        return (
            <ul>
            {CharacterList}
            </ul>
        )
    
}

export default Character;