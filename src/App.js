import React, { Component } from "react";
import "./App.css";
import CharacterContainer from "./Containers/CharacterContainer"
import Nav from "./Components/Nav"
import {Segment, Divider} from 'semantic-ui-react'
import HouseContainer from "./Containers/HouseContainer"

class App extends Component {
  state = {
    characters: [],
    houses: [],
    value: "",
    searchTerm: ""
  }

  fetchCharacters() {
    return fetch('http://localhost:3001/characters')
      .then(res => res.json())
  }

  fetchHouses() {
    return fetch('http://localhost:3001/houses')
      .then(res => res.json())
  }

  fetchAddCharacter(data) {
    console.log('adding a character')
    // fetch('http://localhost:3001/characters', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Accept: 'application/json' 
    //   },
    //   body: JSON.stringify(data)
    // })
  }

  componentDidMount() {
    this.fetchCharacters().then(chars => this.setState({ characters: chars }))
    this.fetchHouses().then(houses => this.setState({ houses: houses }))
  }

  houseChange = (value, charId) => {
    let characters = [...this.state.characters]
    let character = characters.find(c => c.id === charId)
    character.house = value
    this.setState({
      characters: characters
    })
  }

  addCharacter = (data) => {
    let character = data
    character.id = this.state.characters.length + 1
    console.log(character)
    this.setState({
      characters: [...this.state.characters, data]
    })
  }

  characterList = () => {
    return [...this.state.characters]
  }

  charsByHouse = (house) => {
    return this.characterList().filter(e => e.house === house)
  }

  searchChars = (e) => {
    console.log(e.target.value)
    this.setState({
      searchTerm: e.target.value
    })
  }

  wizardsFiltered = (searchBy) => {
    let term = searchBy.toLowerCase()
   return this.state.characters.filter(wiz => (wiz.name + wiz.house).toLowerCase().includes(term))
  }

  render() {
    return (
      <div className="app">
        <Segment>
          <Nav addCharacter={this.addCharacter} searchChars={this.searchChars} searchTerm={this.state.searchTerm} />
          <Divider horizontal> Characters </Divider>
          <CharacterContainer characters={this.wizardsFiltered(this.state.searchTerm)} houseChange={this.houseChange}/>
          <Divider horizontal> Houses </Divider>
          <br></br>
          <HouseContainer houses={this.state.houses} charsByHouse={this.charsByHouse} houseChange2={this.houseChange} />
        </Segment>
      </div>
    );
  }
}

export default App;
