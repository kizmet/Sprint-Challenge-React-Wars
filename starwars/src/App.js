import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Container,
  Loader,
  Button,
  Card,
  Grid,
  Header
} from "semantic-ui-react";
import "./App.css";
import Characters from "./components/Characters";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [url, setUlr] = useState("https://swapi.co/api/people");
  const [prevUrl, setPrevUrl] = useState("");

  useEffect(() => {
    const getCharacters = async url => {
      setIsLoading(true);
      const request = await fetch(url)
        .then(res => {
          return res.json();
        })
        .then(jsonRes => {
          const results = jsonRes.results;
          setCharacters(results);
          setNextUrl(jsonRes.next);
          setPrevUrl(jsonRes.previous);
          const data = characters;
          setIsLoading(false);
          //console.log(JSON.stringify(results));
        })

        .catch(err => {
          throw new Error(err);
        });
    };
    getCharacters(url);
  }, [url]);

  // const handleInputChange = event => {
  //   const { name, value } = event.target;

  //   setDate(value );
  // };

  const handleSubmit = () => {
    nextUrl && setUlr(nextUrl);
  };

  const handlePrevious = () => {
    prevUrl && setUlr(prevUrl);
  };

  return (
    <Container className="App" style={{ marginTop: "3em" }}>
      {isLoading && <Loader active inline className="slow red" />}
      <div className="App">
        <Header as="h1">React Wars</Header>
        <Grid centered columns={3}>
          
            <Grid.Column width={3}>
            {prevUrl && (
                          <Button onClick={handlePrevious}>Load Previous!</Button>)
            }
            </Grid.Column>
          
          <Grid.Column width={9}>
            <Card.Group centered itemsPerRow={3}>
              {characters.map(character => (
                <Characters
                  key={character.created.toString()}
                  character={character}
                />
              ))}
            </Card.Group>
          </Grid.Column >
          <Grid.Column width={3}>
            <Button onClick={handleSubmit}>Load Next!</Button>
          </Grid.Column>
        </Grid>
      </div>
    </Container>
  );
};

export default App;

//
