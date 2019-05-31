import React, { Component } from 'react';

const CharacterList = (props) => {
  
    return (
            <div>
            <li>{props.value}
            <button>{props.status}</button></li>
            </div>
            
          )

}

export default CharacterList;