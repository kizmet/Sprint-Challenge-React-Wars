import React, { useState, useEffect } from "react";
import { Card, Button, Header, Image, Modal, Icon } from "semantic-ui-react";
import Profile from "./Profile";

const Characters = props => {
  const [url, setUrl] = useState("");
  const [homeworld, setHomeworld] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [calling, setCalling] = useState(false);

  useEffect(() => {
    const getCharacters = async url => {
      setIsLoading(true);
      const request = await fetch(url)
        .then(res => {
          
          return res.json();
        })
        .then(jsonRes => {
          const results = jsonRes;
          console.log(results)
          setHomeworld(results);
          setIsLoading(false);
          //console.log(JSON.stringify(results));
        })

        .catch(err => {
          throw new Error(err);
        });
    };
    (calling && getCharacters(url))
    
  }, [calling]);

  const handleClick = event => {
    setCalling(true)
    //const { name, value } = event.target;

    setUrl(event);
  };

  return (
    <Modal
    onOpen={() =>handleClick(props.character.homeworld)}
    value={props.character.homeworld}
      trigger={
        <Card
          header={props.character.name}
          description={props.character.birth_year}
          meta={props.character.gender}
          
        ></Card>

      }
      centered={false}
    >
      <Modal.Content image>
        <Image wrapped size="medium" > <Icon name="world" color="violet" loading/> </Image>
        <Modal.Description>
          <Header>{`Homeworld: ${props.character.name}`}</Header>
          <p>Name: {homeworld.name}</p>
          <p>Climate: {homeworld.climate}</p>
          <p>Population: {homeworld.population}</p>
          <p>Terrain: {homeworld.terrain}</p>

        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default Characters;

{
  /*  <Card
    header={props.character.name}
    description={props.character.birth_year}
    meta={props.character.gender}
  >
  </Card>*/
}
