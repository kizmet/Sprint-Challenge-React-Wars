import React, { Component } from 'react';
import './App.css';
import Character from './components/Character'
//import CharacterList from './components/CharacterList'; 
class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
    this.componentDidMount=this.componentDidMount.bind(this);
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };


  render() {
    const {starwarsChars} = this.state;
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Content">
          <Character 
          starwarsChars={starwarsChars}

          />
        </div>
      </div>
    );
  }


}

export default App;
