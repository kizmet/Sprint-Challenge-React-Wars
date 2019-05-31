import React, { Component } from 'react';
import CharacterList from './CharacterList'; 
import './Character.css';

const Character = (props) => {
        const starwarsChars=props.starwarsChars;
        const characterList = starwarsChars.map((character) =>
            <CharacterList key={character.created.toString()}
              value={character.name}
              birth_year={character.birth_year}
              edited={character.edited.toString()} />
        );
        return (
            <ul>
            {characterList}
            </ul>
        )
    
}

export default Character;