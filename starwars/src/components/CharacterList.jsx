import React, { Component } from 'react';
import './CharacterList.css'
import ImageThumbnail from './thumbnail'
const CharacterList = (props) => {

    return (
        <li>
            <div className="wrapper">
                <ImageThumbnail />
                <div className="main">
                <div className="title">
                <h5>{props.value}</h5>
                <h6>Last Edited: {props.edited}</h6>
                </div>   
                  

                <p>Born: {props.birth_year}</p>
                </div>


                
            </div>
        </li>

    )

}

export default CharacterList;