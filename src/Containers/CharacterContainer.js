import React from "react";
import {Card} from "semantic-ui-react"
import CharacterCard from "../Components/CharacterCard"

export default class CharacterContainer extends React.Component {


  cards = () => {
    return this.props.characters.map((character, ind) => <CharacterCard key={ind} character={character} image={character.image1} houseChange={this.props.houseChange}/>)
  }

  render() {
    return (
    <Card.Group>
      {this.cards()}
    </Card.Group>
    )
  }
}
